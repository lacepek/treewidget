import { Component } from './base/component';
import { TreeLine, LineData, OnLineMoveData } from './treeLine';
import { Modal } from './base/modal';
import objectFilter from './base/utility/objectFilter';
import { TreeForm } from './treeForm';
import { FormModel, FormAttribute } from './base/forms/interfaces/formModel';
import objectMap from './base/utility/objectMap';
import { TreeSortZone } from './treeSortZone';
import SortZone from './base/containers/sortzone';

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

  private addLineCallback: any;

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
    this.createLines(this.state.data, level, iterator, this.element, null, null, null, null);

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
    beforeParent: HTMLElement,
    beforeSortZone: TreeSortZone,
    beforeDataNode: DataNode
  ): void
  {
    const dataCount = data.length;
    let currentCount = 0;
    const keys = Object.keys(data);
    
    const structureKeys = Object.keys(this.structure);
    const structureKey = structureKeys[level];
    const structure = this.structure[structureKey];
    
    const nextStructureKey = structureKeys[level + 1];
    const nextStructure = this.structure[nextStructureKey];
    console.log({ data, keys });
    for (let i = 0, n = keys.length; i <= n; i++) {      
      if (this.canEdit && i === n) {
        iterator.count++;
        this.createAddLine(level, iterator.count, parent, structure, sortZone);
        break;
      }

      const key = keys[i];
      const dataNode = data[key as any];

      if (!dataNode.children) {
        dataNode.children = [];
      }

      const line = this.createLine(level, iterator.count, parent, dataNode, structure, sortZone);

      if (this.canEdit && sortZone) {
        sortZone.addChild(line);
      }

      // create add line in edit mode at the end of level
      currentCount++;
      const isLastData = dataCount === currentCount;
      /*if (this.canEdit && isLastData) {
        iterator.count++;
        this.createAddLine(level, iterator.count, parent, structure, sortZone);
      }*/

      iterator.count++;
      let container = this.element;
      let newSortZone = null;
      // if element have children create wrapper for them
      if (dataNode.children) {
        // if child structure level is sortable create dropzone
        const canDrop = this.canEdit && nextStructure && nextStructure.isSortable;
        newSortZone = new TreeSortZone({ tag: 'div', data: dataNode, canDrop, parentElement: parent });

        container = newSortZone.element;
        container.setAttribute('class', structure.name);

        parent.appendChild(container);
      }

      // Add button after container
      /*if (this.canEdit && isLastData) {
        const beforeStructureKey = structureKeys[level - 1];
        const beforeStructure = this.structure[beforeStructureKey];
        
        iterator.count++;
        if (beforeStructure) {
          this.createAddLine(level - 1, iterator.count, beforeParent, beforeDataNode, beforeStructure, beforeSortZone);
        }
      }*/

      beforeParent = parent;
      beforeSortZone = newSortZone;
      beforeDataNode = dataNode;

      if (level < structureKeys.length - 1) {
        this.createLines(
          dataNode.children ? dataNode.children : [],
          level + 1,
          iterator,
          container,
          newSortZone,
          beforeParent,
          beforeSortZone,
          beforeDataNode
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
  onLineAddSubmit?: (model: FormModel) => { model: FormModel, isValid: boolean }
  onLineEditSubmit?: (model: FormModel) => { model: FormModel, isValid: boolean }
}

export interface TreeConfig
{

}

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
  canEdit?: boolean;
  options?: { class?: string };
  items?: { [name: string]: StructureItem };
}

export interface StructureItem extends FormAttribute
{
  defaultValue?: string;
}
