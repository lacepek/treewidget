import { ITreeEvents, IDataNode, IStructure, IStructureItem } from "./tree";
import { Sortable, IOnSortSuccessData } from "./base/sortable";
export declare class TreeLine extends Sortable {
    level: number;
    data: IDataNode;
    structure: IStructure;
    color: string;
    textColor: string;
    offset: number;
    canEdit: boolean;
    count: number;
    text: string;
    events: ITreeEvents;
    onSortSuccess(data: IOnSortSuccessData): void;
    protected render(): void;
    protected postRender(): void;
    protected createItems(): void;
    protected createItem(value: string, itemCount: number): HTMLElement;
    protected getItemValue(key: string, item: IStructureItem): string;
    protected getVisibleItemCount(items: {
        [name: string]: IStructureItem;
    }): number;
    protected setDefaultProps(): void;
}
export interface IOnClickData {
    text: string;
    name: string;
    canDrag: boolean;
}
export interface IOnLineMoveData extends IOnClickData, IOnSortSuccessData {
}
//# sourceMappingURL=tree-line.d.ts.map