import { Component } from './base/component';
import { TreeLine, LineData, OnLineMoveData } from './treeLine';
import { Modal } from './base/modal';
import { TreeForm } from './treeForm';
import { FormModel, FormAttribute } from './base/forms/interfaces/formModel';
import objectMap from './base/utility/objectMap';
import { TreeSortZone } from './treeSortZone';
import { Structure, StructureType } from './structure';
import isFunction from './base/utility/isFunction';

/**
 * Main component of TreeWidget, renders tree-like structure from data with options to edit, add and rearrange lines,
 * with ability to hook function callbacks to these events
 */
export class Tree extends Component<{
  data: Array<DataNode>,
  shouldSortZone?: { shouldSort: boolean, parentData: DataNode }
}>
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

  public getOffset(): number
  {
    return this.config.offset;
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

    this.state.shouldSortStructure = { shouldSort: false, structure: null };

    this._structure = objectMap(this.structure, (structure: StructureType) =>
    {
      const newStructure = new Structure(structure);

      if (newStructure.getCanEdit() === undefined) {
        const canEdit = this.canEdit();
        newStructure.setCanEdit(canEdit);
      }

      if (newStructure.getCanAdd() === undefined) {
        const canAdd = this.canAdd();
        newStructure.setCanAdd(canAdd);
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

    // Current tree level
    let level = 0;
    // Holds count of all lines
    const iterator = { count: 0 };
    this.createLines(this.state.data, null, level, iterator, this.element, rootSortZone);

    this.modal = new Modal({
      parentElement: this.element, title: { size: 3, text: 'Header' },
    });

    this.parentElement.appendChild(this.wrapper);
  }

  protected createRootSortZone(): TreeSortZone
  {
    const structureKey = this.structureKeys[0];
    const structure = this._structure[structureKey];
    const canDrop = structure.getCanEdit() && structure.getIsSortable();
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
    parentData: DataNode,
    level: number,
    iterator: { count: number },
    parent: HTMLElement,
    sortZone: TreeSortZone,
  ): void
  {
    const structureKey = this.structureKeys[level];
    const structure = this._structure[structureKey];

    const nextStructureKey = this.structureKeys[level + 1];
    const nextStructure = this._structure[nextStructureKey];

    this.sortLines(structure, data, parentData);

    const keys = Object.keys(data);

    for (let i = 0, n = keys.length; i <= n; i++) {
      // create add line in edit mode at the end of level      
      if (i === n) {
        this.createAddLine(parentData, level, iterator, parent, structure, sortZone);
        break;
      } else if (i === n) {
        break;
      }

      const key = keys[i];
      const dataNode = data[key as any];
      if (!dataNode.children) {
        dataNode.children = [];
      }

      iterator.count++;
      this.createLine(level, iterator.count, parent, dataNode, structure, sortZone);

      const canDrop = this.canEdit && nextStructure && nextStructure.getIsSortable();
      const parentElement = parent, parentModel = this.createModel(dataNode, structure, false);
      const newSortZone = new TreeSortZone({ tag: 'div', data: dataNode, canDrop, parentElement, model: parentModel });

      const container = newSortZone.element;
      container.setAttribute('class', structure.getName());
      parent.appendChild(container);

      // create lines on next level
      if (level < this.structureKeys.length - 1) {
        this.createLines(
          dataNode.children ? dataNode.children : [],
          dataNode,
          level + 1,
          iterator,
          container,
          newSortZone
        );
      }
    }
  }

  protected sortLines(structure: Structure, data: Array<DataNode>, parentData: DataNode): void
  {
    const sortFunction = structure.getSortFunction();
    const shouldSortZone = this.state.shouldSortZone;
    let shouldSort = false;
    if (shouldSortZone) {
      const hasSameParent = parentData && shouldSortZone.parentData === parentData;
      shouldSort = shouldSortZone.shouldSort && hasSameParent;
    }

    if (isFunction(sortFunction) && (!structure.hasBeenSorted || shouldSort)) {
      data.sort(sortFunction);
      structure.hasBeenSorted = true;
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
    const canEditFunction = structure.getCanEditFunction();
    const canEditLine = canEditFunction !== undefined ? canEditFunction(data) : null;
    const canEdit = canEditLine !== null ? canEditLine && structure.getCanEdit() : structure.getCanEdit();

    const isSortableFunction = structure.getIsSortableFunction();
    const canSortLine = isSortableFunction !== undefined ? isSortableFunction(data): null;
    const canDrag = canSortLine !== null ? structure.getIsSortable() && canSortLine : structure.getIsSortable();

    const container = sortZone, treeConfig = this.config, events = this.events, parentData = sortZone.data;
    const attributes = { className: canEdit ? 'tree-line-edit' : '' };
    const lineOptions = {
      parentElement, data, structure, level, canDrag, events, container, count, treeConfig, attributes, parentData
    }

    const line = new TreeLine(lineOptions);

    if (canDrag) {
      line.events.onLineMoveSuccess = () => { this.setState({ data: this.state.data }) };
    }

    if (sortZone) {
      sortZone.addChild(line);
    }

    if (canEdit) {
      line.element.onclick = () =>
      {
        this.onEditLine(data, parentData, structure, true);
      }
    }

    return line;
  }

  protected createAddLine(
    parentData: DataNode,
    level: number,
    iterator: { count: number },
    parentElement: HTMLElement,
    structure: Structure,
    sortZone: TreeSortZone
  ): TreeLine
  {
    const canAddFunction = structure.getCanAddFunction();
    const canAddLine = canAddFunction !== undefined ? canAddFunction(parentData) : null;
    const canAdd = canAddLine !== null ? canAddLine && structure.getCanAdd() : structure.getCanAdd();
    if (this.canAdd() && canAdd) {
      iterator.count++;

      const addLineText = structure.getAddLineText(), text = addLineText ? addLineText : 'Add line +';
      const attributes = { className: 'tree-line-add' }, count = iterator.count;
      const line = new TreeLine({ parentElement, structure, level, count, text, treeConfig: this.config, attributes });
      line.element.addEventListener('click', () =>
      {
        const containerData = sortZone ? sortZone.data : this.data;
        this.onEditLine(containerData, sortZone.data, structure, false);
      });

      return line;
    }

    return null;
  }

  protected onEditLine(data: DataNode, parentData: DataNode, structure: Structure, isEditing: boolean): void
  {
    if (structure.getUseModalEdit()) {
      this.showModal(data, parentData, structure, isEditing);
    }
  }

  protected showModal(data: DataNode, parentData: DataNode, structure: Structure, isEditing: boolean): void
  {
    const model = Object.assign({}, this.createModel(data, structure, isEditing));
    const parentModel = Object.assign({}, this.createModel(parentData, structure, isEditing));
    console.log(model);
    const form = new TreeForm({
      model,
      onCancel: () => { this.modal.hide() },
      onSubmit: async () => this.onModalSubmit(data, parentData, model, structure, isEditing)
    });

    this.modal.setState({ content: form });

    this.modal.show();
  }

  protected async onModalSubmit(
    data: DataNode,
    parentData: DataNode,
    model: FormModel,
    structure: Structure,
    isEditing: boolean
  ): Promise<void>
  {
    const onLineEditSubmit = this.events.onLineEditSubmit;
    const onLineAddSubmit = this.events.onLineAddSubmit;
    const parentModel = this.createModel(parentData, structure, isEditing);
    const structureType = structure.getStructureType();
    console.log(parentModel);
    let result: LineSubmitResult = { model: {}, response: null };
    let shouldSort = false;
    if (isEditing && isFunction(onLineEditSubmit)) {
      result = await onLineEditSubmit(model, structureType.name, parentModel);
    } else if (isFunction(onLineAddSubmit)) {
      result = await onLineAddSubmit(model, structureType.name, parentModel);
      shouldSort = true;
    }

    if (result.response && result.response.status === true) {
      this.modal.hide();
      console.log(result.model);
      const item = objectMap(result.model, (attribute: FormAttribute) =>
      {
        return attribute.value;
      });

      if (!isEditing) {
        if (!data.children) {
          data.children = [];
        }

        data.children.push({ item });
      } else {
        data.item = item;
      }

      this.setState({ data: this.state.data, shouldSortZone: { shouldSort, parentData } });
    }
  }

  private createModel(data: DataNode, structure: Structure, isEditing: boolean): FormModel
  {
    const structureItems = Object.assign({}, structure.getItems());
    const localData = Object.assign({}, data);
    const model = objectMap(structureItems, (item: FormAttribute) =>
    {
      if (isEditing) {
        const key = item.name;

        if (key in localData.item) {
          item.value = localData.item[key];
        }
      }

      return item;
    });

    return Object.assign({}, model);
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
    this.events.onLineAddSubmit = (model: FormModel) => { return { model, response: null } };
    this.events.onLineEditSubmit = (model: FormModel) => { return { model, response: null } };
  }
}

export type TreeEvents = {
  onLineClick?: (data: LineData, item: HTMLElement) => void;
  onLineMove?: OnLineMoveEvent;

  /**
   * Fires when new line was submited
   */
  onLineAddSubmit?: OnLineSubmitEvent;

  /**
   * Fires when line edit was submited
   */
  onLineEditSubmit?: OnLineSubmitEvent;
};

export type OnLineSubmitEvent = (model: FormModel, name: string, parentModel: FormModel) => LineSubmitResult;

export type OnLineMoveEvent = (moveData: OnLineMoveData, item: HTMLElement) => void;


export type TreeConfig = {
  /**
   * Can edit lines
   */
  canEdit?: boolean;
  
  /**
   * Can add lines
   */
  canAdd?: boolean;
  
  /**
   * How much each branch should be offseted
   */
  offset?: number;
};

export type DataNode = {
  [key: string]: any;
  item: { [name: string]: string };
  children?: Array<DataNode>;
};

export type LineSubmitResult = { model: FormModel; response: Response; }; 

export type Response = {
  status: boolean;
  message: string;
  data: Array<DataNode>;
};
