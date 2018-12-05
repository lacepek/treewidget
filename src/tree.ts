import { Component } from "./base/component";
import { TreeLine, IOnClickData, IOnLineMoveData } from "./tree-line";
import SortZone from "./base/containers/sortzone";
import { Container } from "./base/containers/container";
import { ElementUtility } from "./base/utility/elementUtility";
import { Modal } from "./base/modal";

export class Tree extends Component
{
    public data: Array<IDataNode>;
    public structure: { [name: string]: IStructure };
    public canEdit: boolean;
    public events: ITreeEvents;
    public options: ITreeConfig;

    public nodes: Array<ITreeNode>;

    private modal: Modal;

    protected render(): void
    {
        this.parentElement = this.getParentElement();

        if (!this.parentElement) {
            this.parentElement = document.body;
        }

        this.element = ElementUtility.createElement("div", null, { className: "tree-widget-list" });
        const wrapper = ElementUtility.createElement("div", this.element, { className: "tree-widget" });

        this.parentElement.appendChild(wrapper);

        this.nodes.push({ node: this, parent: null, children: [] });

        let level = 0;
        let iterator = { count: 0 };
        let lastNode = this.nodes[this.nodes.length - 1];
        this.createLines(this.data, lastNode.children, lastNode, level, iterator, this.element);

        let modalButton = ElementUtility.createElement('button', 'Edit', { className: "btn" });
        document.body.appendChild(modalButton);

        modalButton.onclick = () =>
        {
            this.modal.show();
        }

        this.modal = new Modal({
            parentElement: document.body, title: { size: 3, text: "Header" }, content: "Foo",
            dismissButton: ElementUtility.createElement('button', 'Cancel', { className: "btn btn-default" }),
            confirmButton: ElementUtility.createElement('button', 'Confirm', { className: "btn btn-primary" }),
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
        nodes: Array<ITreeNode>,
        parentNode: ITreeNode,
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
                    sortZone = new SortZone({ tag: "div" });

                    container = sortZone.element;

                    nodes.push({ node: sortZone, parent: parentNode.node, children: [] });
                } else {
                    const containerComponent = new Container({ tag: "div", parentElement: parent });

                    container = containerComponent.element;
                    nodes.push({ node: containerComponent, parent: parentNode.node, children: [] });
                }

                container.setAttribute("class", structure.name);

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

        newElement.addEventListener("focusout", () =>
        {
            console.log("focusout");
        });

        parent.insertBefore(newElement, element);
    }

    /*protected editDone(): TreeLine
    {
        
    }*/

    protected createAddLine(
        level: number,
        count: number,
        parentElement: HTMLElement,
        data: IDataNode,
        structure: IStructure,
        options?: object
    ): TreeLine
    {
        const defaultText = "Add line +";
        let line = new TreeLine({
            parentElement,
            data,
            structure,
            level,
            count,
            text: this.options.addLineText ? this.options.addLineText : defaultText
        });

        line.element.addEventListener("click", () =>
        {
            let previousElement = line.element.previousElementSibling as HTMLElement;
            this.addEditLine(line);
        });

        return line;
    }

    protected addLine(data: IDataNode, structure: IStructure): void
    {
        if (structure.useFormEdit) {

        }
    }

    protected createLine(
        level: number,
        count: number,
        isSortable: boolean,
        parentElement: HTMLElement,
        data: IDataNode,
        structure: IStructure,
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

export interface ITreeNode
{
    node: Component;
    parent: Component;
    children?: Array<ITreeNode>;
}

export interface ITreeEvents
{
    onLineClick?: (data: IOnClickData, item: HTMLElement) => void;
    onLineMove?: (data: IOnLineMoveData, item: HTMLElement) => void;
}

export interface ITreeConfig
{
    addLineText: string;
}

export interface IDataNode
{
    item: { [name: string]: string };
    children?: Array<IDataNode>;
}

export interface IStructure
{
    name: string;
    parent: string | null;
    isSortable?: boolean;
    useFormEdit?: boolean;
    options?: { class?: string };
    items?: { [name: string]: IStructureItem };
}

export interface IStructureItem
{
    type: string;
    label?: string;
    hidden?: string;
    options?: { [name: string]: IStructureItemOption };
}

export interface IStructureItemOption
{
    value: string;
    label: string;
}
