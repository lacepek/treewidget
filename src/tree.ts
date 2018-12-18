import { Component } from './base/component';
import { TreeLine, LineData, OnLineMoveData } from './treeLine';
import { Modal } from './base/modal';
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
   * Other widget options
   */
  public options: TreeConfig;

  private modal: Modal;
  private wrapper: HTMLElement;
  private structureKeys: string[];

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

    if (this.structure) {
      this.structureKeys = Object.keys(this.structure);
    }
  }

  protected render(): void
  {
    if (!this.parentElement) {
      this.parentElement = document.body;
    }

    const structureKey = this.structureKeys[0];
    const canDrop = this.structure[structureKey].isSortable;
    const rootSortZone = new TreeSortZone({
      tag: 'div',
      data: { item: null, children: this.state.data },
      canDrop,
      parentElement: this.parentElement,
      attributes: { className: 'tree-widget-list' },
    });

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

  protected setDefaultProps(): void
  {
    super.setDefaultProps();

    this.data = [];
    this.structure = {};
    this.canEdit = false;
    this.options = { addLineText: null };

    this.events = {};
    this.events.onLineAddSubmit = (model: FormModel) => { return { model, isValid: true } };
    this.events.onLineEditSubmit = (model: FormModel) => { return { model, isValid: true } }
  }

  protected createLines(
    data: Array<DataNode>,
    level: number,
    iterator: { count: number },
    parent: HTMLElement,
    sortZone: TreeSortZone,
  ): void
  {  
    const structureKeys = Object.keys(this.structure);
    const structureKey = structureKeys[level];
    const structure = this.structure[structureKey];

    const nextStructureKey = structureKeys[level + 1];
    const nextStructure = this.structure[nextStructureKey];

    if (structure.options && structure.options.sortFunction) {
      data.sort(structure.options.sortFunction);
    }

    const keys = Object.keys(data);

    for (let i = 0, n = keys.length; i <= n; i++) {
      if (structure.canEdit === undefined) {
        structure.canEdit = this.canEdit;
      }

      // create add line in edit mode at the end of level      
      if (this.canEdit && structure.canEdit && i === n) {
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

      const isSortable = this.canEdit && structure.canEdit && structure.isSortable;
      if (isSortable) {
        line.onSortSuccess = () => { this.setState({ data: this.state.data }) };
      }

      if (this.canEdit && sortZone) {
        sortZone.addChild(line);
      }

      const canDrop = this.canEdit && nextStructure && nextStructure.isSortable;
      const newSortZone = new TreeSortZone({ tag: 'div', data: dataNode, canDrop, parentElement: parent });

      const container = newSortZone.element;
      container.setAttribute('class', structure.name);
      parent.appendChild(container);

      // create lines on next level
      if (level < structureKeys.length - 1) {
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
    const canDrag = this.canEdit && structure.canEdit && structure.isSortable;
    const container = sortZone, events = this.events;
    const lineOptions = { parentElement, data, structure, level, canDrag, events, container, count }

    const line = new TreeLine(lineOptions);

    if (this.canEdit && structure.canEdit) {
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
    const text = structure.addLineText ? structure.addLineText : 'Add line +';
    const line = new TreeLine({ parentElement, structure, level, count, text });

    line.element.addEventListener('click', () =>
    {
      const containerData = sortZone ? sortZone.data : this.data;
      this.onEditLine(containerData, structure, false);
    });

    return line;
  }

  protected onEditLine(data: DataNode, structure: Structure, isEditing: boolean): void
  {
    if (structure.useModalEdit) {
      let model = structure.items;

      model = objectMap(model, (item: StructureItem) =>
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
}

export interface TreeEvents
{
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

export interface TreeConfig { }

export interface DataNode
{
  [key: string]: any;
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
   * Can lines on this level be sorted
   */
  isSortable?: boolean;

  /**
   * Visible name of tree branch
   */
  label?: string;

  /**
   * Text of add line
   */
  addLineText?: string;

  /**
   * Show modal for line editing
   */
  useModalEdit?: boolean;

  /**
   * Can this level be edited
   */
  canEdit?: boolean;

  /**
   * Other level options
   */
  options?: { sortFunction?: (itemA: any, itemB: any) => number };

  /**
   * Structure of items displayed
   */
  items?: { [name: string]: StructureItem };
}

export interface StructureItem extends FormAttribute
{
  defaultValue?: string;
}
