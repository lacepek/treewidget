import { Component } from './base/component';
import { TreeLine, LineData, OnLineMoveData } from './treeLine';
import SortZone from './base/containers/sortzone';
import { FormModel, FormAttribute } from './base/forms/interfaces/formModel';
export declare class Tree extends Component<{}> {
    data: Array<DataNode>;
    structure: {
        [name: string]: Structure;
    };
    canEdit: boolean;
    events: TreeEvents;
    options: TreeConfig;
    nodes: Array<TreeNode>;
    private modal;
    protected render(): void;
    protected setDefaultProps(): void;
    protected createLines(data: Array<any>, nodes: Array<TreeNode>, parentNode: TreeNode, level: number, iterator: {
        count: number;
    }, parent: HTMLElement, sortZone?: SortZone): void;
    protected addEditLine(line: TreeLine): void;
    protected createAddLine(level: number, count: number, parentElement: HTMLElement, data: DataNode, structure: Structure, options?: object): TreeLine;
    protected addLine(data: DataNode, structure: Structure): void;
    protected createLine(level: number, count: number, isSortable: boolean, parentElement: HTMLElement, data: DataNode, structure: Structure, options?: object, sortZone?: SortZone): TreeLine;
    protected createEditLine(level: number, name: string, parent: HTMLElement): TreeLine;
}
export interface TreeNode {
    node: Component<{}>;
    parent: Component<{}>;
    children?: Array<TreeNode>;
}
export interface TreeEvents {
    onLineClick?: (data: LineData, item: HTMLElement) => void;
    onLineMove?: (data: OnLineMoveData, item: HTMLElement) => void;
    onSubmit?: (model: FormModel) => void;
}
export interface TreeConfig {
    addLineText: string;
}
export interface DataNode {
    item: {
        [name: string]: string;
    };
    children?: Array<DataNode>;
}
export interface Structure {
    name: string;
    parent: string | null;
    isSortable?: boolean;
    useFormEdit?: boolean;
    options?: {
        class?: string;
    };
    items?: {
        [name: string]: StructureItem;
    };
}
export interface StructureItem extends FormAttribute {
    hidden?: string;
}
//# sourceMappingURL=tree.d.ts.map