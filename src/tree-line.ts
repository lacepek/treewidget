import { ITreeEvents, IDataNode, IStructure, IStructureItem } from "./tree";
import { Sortable, IOnSortSuccessData } from "./base/sortable";
import { ElementUtility } from "./base/utility/elementUtility";

export class TreeLine extends Sortable
{
    public level: number;
    public data: IDataNode;
    public structure: IStructure;
    public color: string;
    public textColor: string;
    public offset: number;
    public canEdit: boolean;
    public count: number;
    public text: string;

    public events: ITreeEvents;

    public onSortSuccess(data: IOnSortSuccessData): void
    {
        let moveData = { ...data, ...{ text: "text", name: "name", canDrag: this.canDrag } };
        return this.events.onLineMove(moveData, this.element);
    }

    protected render(): void
    {
        super.render();

        this.element.addEventListener(
            "click",
            () => { this.events.onLineClick({ text: "text", name: "name", canDrag: this.canDrag }, this.element) },
            false
        );

        let className = "tree-line row";
        if (this.count % 2 === 0) {
            className = `${className} tree-line-even`;
        } else {
            className = `${className} tree-line-odd`;
        }

        this.setAttribute("className", className);

        if (this.parentElement) {
            if (this.canDrag) {
                this.setAttribute("draggable", true);
            }

            if (this.text) {
                this.element.innerHTML = this.text;
            } else {
                this.createItems();
            }
        }
    }

    protected postRender(): void
    {
        this.initDragEvents();
    }

    protected createItems(): void
    {
        const items = this.structure.items;
        if (items) {
            const visibleItemCount = this.getVisibleItemCount(items);
            let isOffset = false;
            for (const key in items) {
                if (this.data.item[key]) {
                    const item = items[key];
                    const value = this.getItemValue(key, item);

                    if (!item.hidden) {
                        let itemElement = this.createItem(value, visibleItemCount);

                        if (!isOffset) {
                            const offset = 10 + 20 * this.level;
                            itemElement.style.paddingLeft = `${offset}px`;
                            isOffset = true;
                        }
                    }
                }
            }
        }
    }

    protected createItem(value: string, itemCount: number): HTMLElement
    {
        const columnSize = Math.round(12 / itemCount);
        let className = `col-${Math.max(1, columnSize)}`;

        let item = ElementUtility.createElement("div", value, { className });

        this.addContent(item);

        return item;
    }

    protected getItemValue(key: string, item: IStructureItem): string
    {
        const dataValue = this.data.item[key];
        if (item.options && dataValue) {
            if (item.options[dataValue]) {
                const value = item.options[dataValue].label;

                return value ? value : null;
            }
        }

        return dataValue ? dataValue : null;
    }

    protected getVisibleItemCount(items: { [name: string]: IStructureItem }): number
    {
        let count = 0;
        for (const key in items) {
            const item = items[key];

            if (!item.hidden) {
                count++;
            }
        }

        return count;
    }

    protected setDefaultProps(): void
    {
        super.setDefaultProps();

        this.level = 0;
        this.data = { item: null };
        this.structure = { name: null, parent: null };
        this.color = "dark";
        this.textColor = "light";
        this.offset = 0;
        this.tag = "div";
        this.count = 0;
        this.text = null;

        this.events = {};
        this.events.onLineClick = (data, item) => { };
        this.events.onLineMove = (data, item) => { };
    }
}

export interface IOnClickData
{
    text: string;
    name: string;
    canDrag: boolean;
}

export interface IOnLineMoveData extends IOnClickData, IOnSortSuccessData
{
}
