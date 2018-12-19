import { Component } from './base/component';
import { TreeLine, LineData, OnLineMoveData } from './treeLine';
import { Modal } from './base/modal';
import { TreeForm } from './treeForm';
import { FormModel, FormAttribute } from './base/forms/interfaces/formModel';
import objectMap from './base/utility/objectMap';
import { TreeSortZone } from './treeSortZone';
import { Structure, StructureType } from './structure';

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
  public structure: { [name: string]: StructureType };

  /**
   * Event callback hooks
   */
  public events: TreeEvents;

  /**
   * Other widget configuration
   */
  public config: TreeConfig;

  private modal: Modal;
  private wrapper: HTMLElement;
  private structureKeys: string[];
  private _structure: { [name: string]: Structure };

  public canEdit(): boolean
  {
    return this.config.canEdit;
  }

  public canAdd(): boolean
  {
    return this.config.canAdd;
  }

  public clearContent(): void
  {
    super.clearContent();

    this.parentElement.removeChild(this.wrapper);
  }

  protected init(): void
  {
    super.init();

    if (this.data) {
      this.state.data = this.data;
    }

    this._structure = objectMap(this.structure, (structure: StructureType) =>
    {
      const newStructure = new Structure(structure);

      if (newStructure.canEdit() === undefined) {
        newStructure.setCanEdit(this.canEdit());
      }

      if (newStructure.canAdd() === undefined) {
        newStructure.setCanAdd(this.canAdd());
      }

      return newStructure;
    });

    if (this._structure) {
      this.structureKeys = Object.keys(this._structure);
    }
  }

  protected render(): void
  {
    if (!this.parentElement) {
      this.parentElement = document.body;
    }

    const rootSortZone = this.createRootSortZone(); 

    this.element = rootSortZone.element;

    this.wrapper = this.createElement('div', this.element, { className: 'tree-widget' });

    this.parentElement.appendChild(this.wrapper);

    let level = 0;
    let iterator = { count: 0 };
    this.createLines(this.state.data, level, iterator, this.element, rootSortZone);

    this.modal = new Modal({
      parentElement: this.element, title: { size: 3, text: 'Header' },
    });

    this.parentElement.appendChild(this.wrapper);
  }

  protected createRootSortZone(): TreeSortZone
  {
    const structureKey = this.structureKeys[0];
    const structure = this._structure[structureKey];
    const canDrop = structure.canEdit() && structure.isSortable();
    return new TreeSortZone({
      tag: 'div',
      data: { item: null, children: this.state.data },
      canDrop,
      parentElement: this.parentElement,
      attributes: { className: 'tree-widget-list' },
    });
  }

  protected createLines(
    data: Array<DataNode>,
    level: number,
    iterator: { count: number },
    parent: HTMLElement,
    sortZone: TreeSortZone,
  ): void
  {
    const keys = Object.keys(data);

    const structureKey = this.structureKeys[level];
    const structure = this._structure[structureKey];

    const nextStructureKey = this.structureKeys[level + 1];
    const nextStructure = this._structure[nextStructureKey];

    for (let i = 0, n = keys.length; i <= n; i++) {
      // create add line in edit mode at the end of level      
      if (structure.canAdd() && i === n) {
        iterator.count++;
        this.createAddLine(level, iterator.count, parent, structure, sortZone);
        break;
      } else if (i === n) {
        break;
      }
      iterator.count++;

      const key = keys[i];
      const dataNode = data[key as any];
      if (!dataNode.children) {
        dataNode.children = [];
      }

      const line = this.createLine(level, iterator.count, parent, dataNode, structure, sortZone);

      const canEdit = structure.canEdit();
      const isSortable = canEdit && structure.isSortable();
      if (isSortable) {
        line.onSortSuccess = () => { this.setState({ data: this.state.data }) };
      }

      if (canEdit && sortZone) {
        sortZone.addChild(line);
      }

      const canDrop = this.canEdit && nextStructure && nextStructure.isSortable;
      const newSortZone = new TreeSortZone({ tag: 'div', data: dataNode, canDrop, parentElement: parent });

      const container = newSortZone.element;
      container.setAttribute('class', structure.getName());
      parent.appendChild(container);

      // create lines on next level
      if (level < this.structureKeys.length - 1) {
        this.createLines(
          dataNode.children ? dataNode.children : [],
          level + 1,
          iterator,
          container,
          newSortZone
        );
      }
    }
  }

  protected createLine(
    level: number,
    count: number,
    parentElement: HTMLElement,
    data: DataNode,
    structure: Structure,
    sortZone: TreeSortZone
  ): TreeLine
  {
    const canEdit = this.canEdit() && structure.canEdit()
    const canDrag = canEdit && structure.isSortable();
    const container = sortZone;
    const lineOptions = { parentElement, data, structure, level, canDrag, events: this.events, container, count }

    const line = new TreeLine(lineOptions);
    if (canEdit) {
      line.element.onclick = () =>
      {
        this.onEditLine(data, structure, true);
      }
    }

    return line;
  }

  protected createAddLine(
    level: number,
    count: number,
    parentElement: HTMLElement,
    structure: Structure,
    sortZone: TreeSortZone
  ): TreeLine
  {
    const addLineText = structure.getAddLineText();
    const text = addLineText ? addLineText : 'Add line +';

    const line = new TreeLine({ parentElement, structure, level, count, text });
    if (this.canAdd() && structure.canAdd()) {
      line.element.addEventListener('click', () =>
      {
        const containerData = sortZone ? sortZone.data : this.data;
        this.onEditLine(containerData, structure, false);
      });
    }

    return line;
  }

  protected onEditLine(data: DataNode, structure: Structure, isEditing: boolean): void
  {
    if (structure.useModalEdit) {
      let model = structure.getItems();

      model = objectMap(model, (item: FormAttribute) =>
      {
        if (isEditing) {
          const key = item.name;
          if (key in data.item) {
            item.value = data.item[key];
          }
        }

        return item;
      });

      this.showModal(data, model, isEditing);
    }
  }

  protected showModal(data: DataNode, model: FormModel, isEditing: boolean): void
  {
    const form = new TreeForm({
      model,
      onCancel: () => { this.modal.hide() },
      onSubmit: async () => this.onModalSubmit(data, model, isEditing)
    });

    this.modal.setState({ content: form });

    this.modal.show();
  }

  protected async onModalSubmit(data: DataNode, model: FormModel, isEditing: boolean)
  {
    let result = { model: {}, isValid: false };
    if (isEditing) {
      result = await this.events.onLineEditSubmit(model);
    } else {
      result = await this.events.onLineAddSubmit(model);
    }

    if (result.isValid) {
      this.modal.hide();

      const item = objectMap(result.model, (attribute: FormAttribute) =>
      {
        return attribute.value;
      })

      if (!isEditing) {
        if (!data.children) {
          data.children = [];
        }

        data.children.push({ item });
      } else {
        data.item = item;
      }

      this.setState({ data: this.state.data });
    }
  }

  protected setDefaultProps(): void
  {
    super.setDefaultProps();

    this.data = [];
    this.structure = {};
    this.config = {};

    this.events = {};
    this.events.onLineClick = () => { };
    this.events.onLineMove = () => { };
    this.events.onLineAddSubmit = (model: FormModel) => { return { model, isValid: true } };
    this.events.onLineEditSubmit = (model: FormModel) => { return { model, isValid: true } }
  }
}

export type TreeEvents = {
  onLineClick?: (data: LineData, item: HTMLElement) => void;
  onLineMove?: (data: OnLineMoveData, item: HTMLElement) => void;

  /**
   * Fires when new line was submited
   */
  onLineAddSubmit?: (model: FormModel) => { model: FormModel, isValid: boolean }

  /**
   * Fires when line edit was submited
   */
  onLineEditSubmit?: (model: FormModel) => { model: FormModel, isValid: boolean }
}

export type TreeConfig = {
  /**
   * Can edit lines
   */
  canEdit?: boolean;

  /**
   * Can add lines
   */
  canAdd?: boolean;
}

export type DataNode = {
  [key: string]: any;
  item: { [name: string]: string };
  children?: Array<DataNode>;
}
