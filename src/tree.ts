import { Component } from './base/component';
import { TreeLine, LineData, OnLineMoveData } from './treeLine';
import { Modal } from './base/modal';
import objectFilter from './base/utility/objectFilter';
import { TreeForm } from './treeForm';
import { FormModel, FormAttribute } from './base/forms/interfaces/formModel';
import objectMap from './base/utility/objectMap';
import { TreeSortZone } from './treeSortZone';

/**
 * Main component of TreeWidget, renders tree-like structure from data with options to edit, add and rearrange lines,
 * with ability to hook function callbacks to these events
 */
export class Tree extends Component<{ data: Array<DataNode> }>
{
  /**
   * Data to be displayed
   */
  public data: Array<DataNode>;

  /**
   * Settings for how the data should be structured
   */
  public structure: { [name: string]: Structure };

  /**
   * Should the tree be editable
   */
  public canEdit: boolean;

  /**
   * Event callback hooks
   */
  public events: TreeEvents;

  /**
   * Other options
   */
  public options: TreeConfig;

  private modal: Modal;
  private wrapper: HTMLElement;

  public clearContent(): void
  {
    super.clearContent();

    this.parentElement.removeChild(this.wrapper);
  }

  protected init(): void
  {
    super.init();

    this.state.data = this.data;
  }

  protected render(): void
  {
    if (!this.parentElement) {
      this.parentElement = document.body;
    }

    this.setAttribute('class', 'tree-widget-list');

    this.wrapper = this.createElement('div', this.element, { className: 'tree-widget' });

    let level = 0;
    let iterator = { count: 0 };
    this.createLines(this.state.data, level, iterator, this.element, null);

    this.modal = new Modal({
      parentElement: this.element, title: { size: 3, text: 'Header' },
    });
  }

  protected postRender(): void
  {
    this.parentElement.appendChild(this.wrapper);
  }

  protected setDefaultProps(): void
  {
    super.setDefaultProps();

    this.data = [];
    this.structure = {};
    this.canEdit = false;
    this.options = { addLineText: null };
  }

  protected createLines(
    data: Array<any>,
    level: number,
    iterator: { count: number },
    parent: HTMLElement,
    sortZone: TreeSortZone
  ): void
  {
    const dataCount = data.length;
    let currentCount = 0;
    for (let key in data) {
      const dataNode = data[key];

      const structureKey = Object.keys(this.structure)[level];
      const structure = this.structure[structureKey];

      let isSortable = this.canEdit && structure.isSortable;
      let line = this.createLine(level, iterator.count, isSortable, parent, dataNode, structure, {}, sortZone);

      if (this.canEdit && sortZone) {
        sortZone.addChild(line);
      }

      // create add line in edit mode at the end of level
      currentCount++;
      if (this.canEdit && dataCount === currentCount) {
        iterator.count++;
        this.createAddLine(level, iterator.count, parent, dataNode, structure, line);
      }

      iterator.count++;
      let container = this.element;
      // if element have children create wrapper for them
      if (dataNode.children) {
        // if child structure level is sortable create dropzone
        const nextStructureKey = Object.keys(this.structure)[level + 1];
        const nextStructure = this.structure[nextStructureKey];

        const canDrop = this.canEdit && nextStructure.isSortable;
        sortZone = new TreeSortZone({ tag: 'div', data: dataNode, canDrop, parentElement: parent });

        container = sortZone.element;
        container.setAttribute('class', structure.name);

        parent.appendChild(container);

        this.createLines(
          dataNode.children,
          level + 1,
          iterator,
          container,
          sortZone
        );
      }
    }
  }

  protected addEditLine(line: TreeLine): void
  {
    const element = line.element;
    const parent = line.parentElement;

    const newLine = this.createEditLine(line.level, line.structure.name, line.parentElement);
    const newElement = newLine.element;
    newElement.focus();

    parent.insertBefore(newElement, element);
  }

  /*protected editDone(): TreeLine
  {
      
  }*/

  protected createAddLine(
    level: number,
    count: number,
    parentElement: HTMLElement,
    data: DataNode,
    structure: Structure,
    lineBefore: TreeLine,
    options?: object
  ): TreeLine
  {
    const defaultText = 'Add line +';
    const text = this.options.addLineText ? this.options.addLineText : defaultText
    let line = new TreeLine({
      parentElement, data, structure, level, count, text, attributes: { className: 'text-center' }
    });

    line.element.addEventListener('click', () =>
    {
      const containerData = lineBefore.container.data;
      this.addLine(containerData, structure);
    });

    return line;
  }

  protected addLine(containerData: DataNode, structure: Structure): void
  {
    if (structure.useFormEdit) {
      const rawModel = structure.items;
      let modelItems = objectFilter(rawModel, (item: StructureItem) =>
      {
        if (!item.hidden) {
          return true;
        }

        return false;
      });

      modelItems = objectMap(modelItems, (item: StructureItem) =>
      {
        if (!item.value && item.defaultValue) {
          item.value = item.defaultValue;
        }

        return item;
      });

      const form = new TreeForm({
        model: modelItems,
        onCancel: () => { this.modal.hide() },
        onSubmit: async (model: any) =>
        {
          let result = false;
          if (this.events.onLineEditSubmit) {
            result = await this.events.onLineEditSubmit(rawModel);
          }

          if (result) {
            this.modal.hide();

            const item = objectMap(model, (attribute: FormAttribute) =>
            {
              return attribute.value;
            })

            containerData.children.push({ item });

            this.setState({ data: this.state.data });
          }
        }
      });

      this.modal.setState({ content: form });

      this.modal.show();
    }
  }

  protected createLine(
    level: number,
    count: number,
    isSortable: boolean,
    parentElement: HTMLElement,
    data: DataNode,
    structure: Structure,
    options?: object,
    sortZone?: TreeSortZone
  ): TreeLine
  {
    let lineOptions = {
      parentElement,
      data,
      structure,
      level,
      canDrag: isSortable,
      events: this.events,
      container: sortZone,
      count
    }

    return new TreeLine(lineOptions);
  }

  protected createEditLine(level: number, name: string, parent: HTMLElement): TreeLine
  {
    let line = this.createLine(level, 0, false, parent, { item: null }, { name: null, parent: null });

    return line;
  }
}

export interface TreeNode
{
  node: Component<{}>;
  parent: Component<{}>;
  children?: Array<TreeNode>;
}

export interface TreeEvents
{
  onLineClick?: (data: LineData, item: HTMLElement) => void;
  onLineMove?: (data: OnLineMoveData, item: HTMLElement) => void;
  onLineEditSubmit?: (model: FormModel) => boolean
}

export interface TreeConfig
{
  addLineText: string;
}

export interface DataNode
{
  item: { [name: string]: string };
  children?: Array<DataNode>;
}

export interface Structure
{
  /**
   * Name of tree branch
   */
  name: string;

  /**
   * Parent tree branch
   */
  parent: string | null;

  /**
   * Can th childs be sorted
   */
  isSortable?: boolean;
  useFormEdit?: boolean;
  options?: { class?: string };
  items?: { [name: string]: StructureItem };
}

export interface StructureItem extends FormAttribute
{
  hidden?: string;
  defaultValue?: string;
}
