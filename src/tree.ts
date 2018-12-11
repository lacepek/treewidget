import { Component } from './base/component';
import { TreeLine, LineData, OnLineMoveData } from './treeLine';
import SortZone from './base/containers/sortzone';
import { Container } from './base/containers/container';
import { Modal } from './base/modal';
import { DynamicForm } from './base/forms/dynamicForm';
import objectFilter from './base/utility/objectFilter';
import { TreeForm } from './treeForm';
import { FormModel, FormAttribute } from './base/forms/interfaces/formModel';

export class Tree extends Component<{}>
{
  public data: Array<DataNode>;
  public structure: { [name: string]: Structure };
  public canEdit: boolean;
  public events: TreeEvents;
  public options: TreeConfig;

  public nodes: Array<TreeNode>;

  private modal: Modal;

  protected render(): void
  {
    if (!this.parentElement) {
      this.parentElement = document.body;
    }

    this.setAttribute('class', 'tree-widget-list');

    const wrapper = this.createElement('div', this.element, { className: 'tree-widget' });

    this.parentElement.appendChild(wrapper);

    this.nodes.push({ node: this, parent: null, children: [] });

    let level = 0;
    let iterator = { count: 0 };
    let lastNode = this.nodes[this.nodes.length - 1];
    this.createLines(this.data, lastNode.children, lastNode, level, iterator, this.element);

    this.modal = new Modal({
      parentElement: document.body, title: { size: 3, text: 'Header' },
    });
  }

  protected setDefaultProps(): void
  {
    super.setDefaultProps();

    this.data = [];
    this.structure = {};
    this.canEdit = false;
    this.nodes = [];
    this.options = { addLineText: null };
  }

  protected createLines(
    data: Array<any>,
    nodes: Array<TreeNode>,
    parentNode: TreeNode,
    level: number,
    iterator: { count: number },
    parent: HTMLElement,
    sortZone?: SortZone
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

      //nodes.push({ node: line, parent: parentNode.node });

      if (this.canEdit && sortZone) {
        sortZone.addChild(line);
      }

      // create add line in edit mode at the end of level
      currentCount++;
      if (this.canEdit && dataCount === currentCount) {
        iterator.count++;
        let addLine = this.createAddLine(level, iterator.count, parent, dataNode, structure);
        //nodes.push({ node: addLine, parent: parentNode.node });
      }

      iterator.count++;
      let container = this.element;
      // if element have children create wrapper for them
      if (dataNode.children) {
        // if child structure level is sortable create dropzone
        const nextStructureKey = Object.keys(this.structure)[level + 1];
        const nextStructure = this.structure[nextStructureKey];
        if (this.canEdit && nextStructure.isSortable) {
          sortZone = new SortZone({ tag: 'div' });

          container = sortZone.element;

          nodes.push({ node: sortZone, parent: parentNode.node, children: [] });
        } else {
          const containerComponent = new Container<{}>({ tag: 'div', parentElement: parent });

          container = containerComponent.element;
          nodes.push({ node: containerComponent, parent: parentNode.node, children: [] });
        }

        container.setAttribute('class', structure.name);

        parent.appendChild(container);

        let lastNode = nodes[nodes.length - 1];
        this.createLines(
          dataNode.children,
          lastNode.children,
          lastNode,
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
    options?: object
  ): TreeLine
  {
    const defaultText = 'Add line +';
    let line = new TreeLine({
      parentElement,
      data,
      structure,
      level,
      count,
      text: this.options.addLineText ? this.options.addLineText : defaultText
    });

    line.element.addEventListener('click', () =>
    {
      this.addLine(data, structure);
    });

    return line;
  }

  protected addLine(data: DataNode, structure: Structure): void
  {
    if (structure.useFormEdit) {
      let modelItems = objectFilter(structure.items, (item: StructureItem) =>
      {
        if (!item.hidden) {
          return true;
        }

        return false;
      });

      const form = new TreeForm({
        model: modelItems,
        onCancel: () => { this.modal.hide() },
        onSubmit: (model: any) => { }
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
    sortZone?: SortZone
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
  onSubmit?: (model: FormModel) => void
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
  name: string;
  parent: string | null;
  isSortable?: boolean;
  useFormEdit?: boolean;
  options?: { class?: string };
  items?: { [name: string]: StructureItem };
}

export interface StructureItem extends FormAttribute
{
  hidden?: string;
}
