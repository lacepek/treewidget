import { Component } from './base/component';
import { TreeLine, LineData, OnLineMoveData } from './treeLine';
import { Modal } from './base/modal';
import { TreeForm } from './treeForm';
import { FormModel, FormAttribute } from './base/forms/interfaces/formModel';
import objectMap from './base/utility/objectMap';
import { TreeSortZone } from './treeSortZone';
import { Structure, StructureType } from './structure';
import isFunction from './base/utility/isFunction';
import fetchPost from './fetchPost';

/**
 * Main component of TreeWidget, renders tree-like structures from data with options to edit, add and rearrange lines,
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
  public structures: { [name: string]: StructureType };

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
  private _structures: { [name: string]: Structure };

  public canEdit(): boolean
  {
    return this.config.canEdit;
  }

  public canAdd(): boolean
  {
    return this.config.canAdd;
  }

  public canDelete(): boolean
  {
    return this.config.canDelete;
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

    this.initStructures();
  }

  protected render(): void
  {
    if (!this.state.data) {
      return;
    }

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
      parentElement: this.element,
    });

    this.parentElement.appendChild(this.wrapper);
  }

  protected createRootSortZone(): TreeSortZone
  {
    const structureKey = this.structureKeys[0];
    const structure = this._structures[structureKey];
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
    const structure = this._structures[structureKey];

    const nextStructureKey = this.structureKeys[level + 1];
    const nextStructure = this._structures[nextStructureKey];

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
      const parentElement = parent;
      const newSortZone = new TreeSortZone({ tag: 'div', data: dataNode, canDrop, parentElement });

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
    const container = sortZone, treeConfig = this.config, events = this.events, parentData = sortZone.data;
    const lineOptions = {
      parentElement, data, structure, level, events, container, count, treeConfig
    }

    const line = new TreeLine(lineOptions);

    if (line.canDragLine()) {
      line.events.onLineMoveSuccess = () => { this.setState({ data: this.state.data }) };
    }

    if (line.canDeleteLine()) {
      line.deleteButton.addEventListener('click', () => { this.showDeleteModal(data, parentData, structure) });
    }

    if (sortZone) {
      sortZone.addChild(line);
    }

    if (line.canEditLine()) {
      line.element.addEventListener('click', (event: any) =>
      {
        const targetIsLine = () =>
        {
          return event.target === line.element || event.target.parentElement === line.element;
        }

        if (targetIsLine()) {
          this.onEditLine(data, parentData, structure, false)
        }
      });
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

    if (this.canAdd() && this.canAddLine(structure, parentData)) {
      iterator.count++;

      const addLineText = structure.getAddLineText(), text = addLineText ? addLineText : 'Add line +';
      const attributes = { className: 'tree-line-add' }, count = iterator.count;
      const line = new TreeLine({ parentElement, structure, level, count, text, treeConfig: this.config, attributes });
      line.element.addEventListener('click', () =>
      {
        const containerData = sortZone ? sortZone.data : this.data;
        this.onEditLine(containerData, sortZone.data, structure, true);
      });

      return line;
    }

    return null;
  }

  protected canAddLine(structure: Structure, parentData: DataNode): boolean
  {
    const canAddFunction = structure.getCanAddFunction();
    const canAddLine = canAddFunction !== undefined ? canAddFunction(parentData) : null;
    return canAddLine !== null ? canAddLine && structure.getCanAdd() : structure.getCanAdd();
  }

  protected onEditLine(data: DataNode, parentData: DataNode, structure: Structure, isNew: boolean): void
  {
    if (structure.getUseModalEdit()) {
      this.showEditModal(data, parentData, structure, isNew);
    }
  }

  protected showEditModal(data: DataNode, parentData: DataNode, structure: Structure, isNew: boolean): void
  {
    const model = this.createModel(data, structure, isNew);
    const form = new TreeForm({
      model,
      onCancel: () => { this.modal.hide() },
      onSubmit: async () => this.onModalEditSubmit(data, parentData, model, structure, isNew)
    });

    this.modal.setState({ content: form });

    this.modal.show();
  }

  protected showDeleteModal(data: DataNode, parentData: DataNode, structure: Structure): void
  {
    const title = this.createElement('h4', 'Are you sure?', { className: 'col-12 text-center' });
    const dismissButton = this.createElement('div', 'Cancel', { className: 'btn btn-default' });
    const confirmButton = this.createElement('div', 'Confirm', { className: 'btn btn-danger' });

    dismissButton.addEventListener('click', () =>
    {
      this.modal.hide();
    });

    confirmButton.addEventListener('click', () =>
    {
      this.onModalDeleteSubmit(data, parentData, structure);
    });

    const leftWrapper = this.createElement('div', dismissButton, { className: 'col-6 text-left' });
    const rightWrapper = this.createElement('div', confirmButton, { className: 'col-6 text-right' });

    const content = this.createElement('div', [leftWrapper, rightWrapper], { className: 'row' });

    this.modal.setState({ content, title });

    this.modal.show();
  }

  protected async onModalEditSubmit(
    data: DataNode,
    parentData: DataNode,
    model: FormModel,
    structure: Structure,
    isNew: boolean
  ): Promise<void>
  {
    const editUrl = structure.getEditUrl();
    const addUrl = structure.getAddUrl();
    const onLineEditSubmit = this.events.onLineEditSubmit;
    const onLineAddSubmit = this.events.onLineAddSubmit;
    const structureType = structure.getStructureType();
    let result: LineSubmitResult = { item: null, response: null };
    let shouldSort = false;
    const itemValues = this.getModelValues(model);
    const postBody = { values: itemValues, parent: parentData.item, name: structureType.name };
    if (isNew) {
      if (addUrl) {
        result = await fetchPost(addUrl, postBody) as LineSubmitResult;
      }
      else if (isFunction(onLineAddSubmit)) {
        result = await onLineAddSubmit(itemValues, parentData.item, structureType.name);
        shouldSort = true;
      }
    }
    else {
      if (editUrl) {
        result = await fetchPost(editUrl, postBody) as LineSubmitResult;
      }
      else if (isFunction(onLineEditSubmit)) {
        result = await onLineEditSubmit(itemValues, parentData.item, structureType.name);
      }
    }

    if (result.response && result.response.status === true) {
      this.modal.hide();

      if (result.response.data) {
        this.state.data = result.response.data;
      } else if (result.item) {
        const item = result.item;
        if (isNew) {
          if (!parentData.children) {
            parentData.children = [];
          }

          parentData.children.push({ item });
        } else {
          data.item = item;
        }
      }

      this.setState({ data: this.state.data, shouldSortZone: { shouldSort, parentData } });
    }
  }

  protected async onModalDeleteSubmit(data: DataNode, parentData: DataNode, structure: Structure): Promise<void>
  {
    const deleteUrl = structure.getDeleteUrl();
    const structureType = structure.getStructureType();
    const onLineDeleteSubmit = this.events.onLineDeleteSubmit;
    let result: LineSubmitResult = { item: null, response: null };
    let shouldSort = false;
    if (deleteUrl) {
      const response = await fetch(deleteUrl);
      result = await response.json();
    }
    else if (isFunction(onLineDeleteSubmit)) {
      result = await onLineDeleteSubmit(data.item, parentData.item, structureType.name);
      shouldSort = true;
    }

    if (result.response && result.response.status === true) {
      this.modal.hide();

      if (result.response.data) {
        this.state.data = result.response.data;
      } else if (result.item) {
        parentData.children = parentData.children.filter((value) =>
        {
          if (value === data) {
            return false;
          }

          return true;
        });
      }

      this.setState({ data: this.state.data, shouldSortZone: { shouldSort, parentData } });
    }
  }

  private getModelValues(model: FormModel): DataNode
  {
    const newModel = Object.assign({}, model);
    const data: DataNode = objectMap(newModel, (attribute: FormAttribute) =>
    {
      return attribute['value'];
    });

    return data;
  }

  private createModel(data: DataNode, structure: Structure, isNew: boolean): FormModel
  {
    const structureItems = structure.getItems();
    const model = objectMap(structureItems, (item: FormAttribute) =>
    {
      const attribute = Object.assign({}, item);
      const key = attribute.name;

      if (!isNew) {
        const dataItem = data.item;
        if (dataItem.hasOwnProperty(key)) {
          attribute.value = dataItem[key];
        }
      }

      return attribute;
    });

    return model;
  }

  private initStructures(): void
  {
    this._structures = objectMap(this.structures, (structureType: StructureType) =>
    {
      const structure = new Structure(structureType);

      if (structure.getCanEdit() === undefined) {
        structure.setCanEdit(this.canEdit());
      }

      if (structure.getCanAdd() === undefined) {
        structure.setCanAdd(this.canAdd());
      }

      if (structure.getCanDelete() === undefined) {
        structure.setCanDelete(this.canDelete());
      }

      return structure;
    });

    if (this._structures) {
      this.structureKeys = Object.keys(this._structures);
    }
  }

  protected setDefaultProps(): void
  {
    super.setDefaultProps();

    this.data = [];
    this.structures = {};
    this.config = {};

    this.events = {};
    this.events.onLineClick = () => { };
    this.events.onLineMove = () => { };
    this.events.onLineAddSubmit = (item: DataNodeItem) => { return { item, response: null } };
    this.events.onLineEditSubmit = (item: DataNodeItem) => { return { item, response: null } };
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

  /**
   * Fires when line delete was submited
   */
  onLineDeleteSubmit?: OnLineSubmitEvent;
};

export type OnLineSubmitEvent = (item: DataNodeItem, parentItem: DataNodeItem, name: string) => LineSubmitResult;

export type OnLineMoveEvent = (moveData: OnLineMoveData, item: HTMLElement) => void;


export type TreeConfig = {
  /**
   * Can edit lines
   */
  readonly canEdit?: boolean;

  /**
   * Can add lines
   */
  readonly canAdd?: boolean;

  /**
   * Can delete lines
   */
  readonly canDelete?: boolean;

  /**
   * How much each branch should be offseted
   */
  readonly offset?: number;
};

export type DataNode = {
  [name: string]: any;
  item: DataNodeItem;
  children?: Array<DataNode>;
};

export type DataNodeItem = { [name: string]: string };

export type LineSubmitResult = { item: DataNodeItem; response: Response; };

export type Response = {
  readonly status: boolean;
  readonly message: string;
  readonly data: Array<DataNode>;
};
