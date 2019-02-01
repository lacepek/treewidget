import { TreeEvents, DataNode, TreeConfig } from './tree';
import { Sortable, OnSortSuccessData } from './base/sortable';
import { ElementUtility } from './base/utility/elementUtility';
import { Structure } from './structure';
import { FormAttribute } from './base/forms/interfaces/formModel';
import isFunction from './base/utility/isFunction';

export class TreeLine extends Sortable
{
  public level: number;
  public data: DataNode;
  public structure: Structure;
  public color: string;
  public textColor: string;
  public offset: number;
  public count: number;
  public text: string;
  public deleteButton: HTMLElement;
  public canDelete: boolean;
  public canEdit: boolean;

  public treeConfig: TreeConfig;
  public events: TreeLineEvents;

  private DEFAULT_OFFSET: number;

  public onSortSuccess(sortData: OnSortSuccessData): void
  {
    if (this.events.onLineMoveSuccess) {
      this.events.onLineMoveSuccess(sortData);
    }
    const onLineMove = this.events.onLineMove;
    const moveLineUrl = this.structure.getMoveLineUrl();
    if (moveLineUrl) {
      fetch(moveLineUrl);
    }
    else if (isFunction(onLineMove)) {
      const moveData = {
        ...sortData,
        ...{ name: this.structure.getName(), canDrag: this.canDragLine(), item: this.data.item }
      };
      this.events.onLineMove(moveData, this.element);
    }
  }

  protected render(): void
  {
    if (isFunction(this.events.onLineClick)) {
      this.element.addEventListener(
        'click',
        () =>
        {
          this.events.onLineClick({ name: this.structure.getName(), canDrag: this.canDragLine() }, this.element);
        },
        false
      );
    }

    let className = 'tree-line row';
    if (this.count % 2 === 0) {
      className = `${className} tree-line-even`;
    } else {
      className = `${className} tree-line-odd`;
    }

    if (this.canEditLine()) {
      className = `${className} tree-line-edit`;
    } else if (this.attributes.className) {
      className = `${className} ${this.attributes.className}`;
    }

    this.setAttribute('class', className);

    if (this.parentElement) {
      if (this.canDragLine()) {
        this.setAttribute('draggable', true);
      }

      if (this.text) {
        this.element.innerHTML = this.text;

        const offset = this.calculateOffset();
        this.element.style.paddingLeft = `${offset}px`;
      } else if (this.data) {
        this.createItems();

        if (this.canDeleteLine()) {
          this.createDeleteButton();
        }
      }
    }
  }

  protected postRender(): void
  {
    super.postRender();

    this.initDragEvents();
  }

  protected createItems(): void
  {
    const items = this.structure.getItems();
    if (items) {
      const visibleItemCount = this.getVisibleItemCount(items);
      let isOffset = false;

      for (const key in items) {
        if (key in this.data.item) {
          const item = items[key];
          const value = this.getItemValue(key, item);

          if (!item.isHidden) {
            const itemElement = this.createItem(value, visibleItemCount);

            this.addContent(itemElement);

            if (!isOffset) {
              const offset = this.calculateOffset();
              itemElement.style.paddingLeft = `${offset}px`;
              isOffset = true;
            }
          }
        }
      }
    }
  }

  public canEditLine()
  {
    const canEditFunction = this.structure.getCanEditFunction();
    const canEditLine = canEditFunction !== undefined ? canEditFunction(this.data) : null;
    return canEditLine !== null ? canEditLine && this.structure.getCanEdit() : this.structure.getCanEdit();
  }

  public canDragLine()
  {
    const isSortableFunction = this.structure.getIsSortableFunction();
    const canSortLine = isSortableFunction !== undefined ? isSortableFunction(this.data) : null;
    return canSortLine !== null ? this.structure.getIsSortable() && canSortLine : this.structure.getIsSortable();
  }

  public canDeleteLine()
  {
    return this.structure.getCanDelete();
  }

  protected createItem(value: string, itemCount: number): HTMLElement
  {
    const maxColumns = this.canDeleteLine() ? 11 : 12;
    const columnSize = Math.floor(maxColumns / itemCount);
    const className = `col-${Math.max(1, columnSize)}`;

    const item = ElementUtility.createElement('div', value, { className });

    return item;
  }

  protected createDeleteButton(): void
  {
    this.deleteButton = ElementUtility.createElement('i', null, { className: 'fas fa-trash-alt tree-line-delete' });
    const wrapper = ElementUtility.createElement('div', this.deleteButton, { className: 'col text-right' });

    this.addContent(wrapper);
  }

  protected calculateOffset(): number
  {
    const offset = this.treeConfig.offset || this.DEFAULT_OFFSET;
    return 10 + (offset * this.level);
  }

  protected getItemValue(key: string, item: FormAttribute): string
  {
    const dataValue = this.data.item[key];
    if (item.options && dataValue) {
      if (item.options[dataValue]) {
        const value = item.options[dataValue].value;

        return value ? value : null;
      }
    }

    return dataValue ? dataValue : null;
  }

  protected getVisibleItemCount(items: { [name: string]: FormAttribute }): number
  {
    let count = 0;
    for (const key in items) {
      const item = items[key];

      if (!item.isHidden) {
        count++;
      }
    }

    return count;
  }

  protected setDefaultProps(): void
  {
    super.setDefaultProps();

    this.level = 0;
    this.data = { item: null, index: 0 };
    this.color = 'dark';
    this.textColor = 'light';
    this.DEFAULT_OFFSET = 25;

    this.count = 0;
    this.text = null;

    this.events = {};
  }
}

export interface TreeLineEvents extends TreeEvents
{
  onLineMoveSuccess?: (data: OnSortSuccessData) => void;
  onLineDelete?: () => void;
}

export type LineData = {
  name: string;
  canDrag: boolean;
}

export interface OnLineMoveData extends LineData, OnSortSuccessData
{
  item: { [name: string]: string }
}
