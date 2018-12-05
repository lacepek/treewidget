import { Component } from "./base/component";
import { TreeLine, IOnClickData, IOnLineMoveData } from "./tree-line";
import SortZone from "./base/containers/sortzone";
import { IFormAttribute } from "./base/forms/IformAttribute";
export declare class Tree extends Component {
    data: Array<IDataNode>;
    structure: {
        [name: string]: IStructure;
    };
    canEdit: boolean;
    events: ITreeEvents;
    options: ITreeConfig;
    nodes: Array<ITreeNode>;
    private modal;
    protected render(): void;
    protected setDefaultProps(): void;
    protected createLines(data: Array<any>, nodes: Array<ITreeNode>, parentNode: ITreeNode, level: number, iterator: {
        count: number;
    }, parent: HTMLElement, sortZone?: SortZone): void;
    protected addEditLine(line: TreeLine): void;
    protected createAddLine(level: number, count: number, parentElement: HTMLElement, data: IDataNode, structure: IStructure, options?: object): TreeLine;
    protected addLine(data: IDataNode, structure: IStructure): void;
    protected createLine(level: number, count: number, isSortable: boolean, parentElement: HTMLElement, data: IDataNode, structure: IStructure, options?: object, sortZone?: SortZone): TreeLine;
    protected createEditLine(level: number, name: string, parent: HTMLElement): TreeLine;
}
export interface ITreeNode {
    node: Component;
    parent: Component;
    children?: Array<ITreeNode>;
}
export interface ITreeEvents {
    onLineClick?: (data: IOnClickData, item: HTMLElement) => void;
    onLineMove?: (data: IOnLineMoveData, item: HTMLElement) => void;
}
export interface ITreeConfig {
    addLineText: string;
}
export interface IDataNode {
    item: {
        [name: string]: string;
    };
    children?: Array<IDataNode>;
}
export interface IStructure {
    name: string;
    parent: string | null;
    isSortable?: boolean;
    useFormEdit?: boolean;
    options?: {
        class?: string;
    };
    items?: {
        [name: string]: IStructureItem;
    };
}
export interface IStructureItem extends IFormAttribute {
    hidden?: string;
}
//# sourceMappingURL=tree.d.ts.map