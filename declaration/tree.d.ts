import { Component } from './base/component';
import { TreeLine, LineData, OnLineMoveData } from './treeLine';
import { FormModel, FormAttribute } from './base/forms/interfaces/formModel';
import { TreeSortZone } from './treeSortZone';
/**
 * Main component of TreeWidget, renders tree-like structure from data with options to edit, add and rearrange lines,
 * with ability to hook function callbacks to these events
 */
export declare class Tree extends Component<{
    data: Array<DataNode>;
}> {
    /**
     * Data to be displayed
     */
    data: Array<DataNode>;
    /**
     * Settings for how the data should be structured
     */
    structure: {
        [name: string]: Structure;
    };
    /**
     * Should the tree be editable
     */
    canEdit: boolean;
    /**
     * Event callback hooks
     */
    events: TreeEvents;
    /**
     * Other options
     */
    options: TreeConfig;
    private modal;
    private wrapper;
    clearContent(): void;
    protected init(): void;
    protected render(): void;
    protected postRender(): void;
    protected setDefaultProps(): void;
    protected createLines(data: Array<any>, level: number, iterator: {
        count: number;
    }, parent: HTMLElement, sortZone: TreeSortZone): void;
    protected addEditLine(line: TreeLine): void;
    protected createAddLine(level: number, count: number, parentElement: HTMLElement, data: DataNode, structure: Structure, lineBefore: TreeLine, options?: object): TreeLine;
    protected addLine(containerData: DataNode, structure: Structure): void;
    protected createLine(level: number, count: number, isSortable: boolean, parentElement: HTMLElement, data: DataNode, structure: Structure, options?: object, sortZone?: TreeSortZone): TreeLine;
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
    onLineEditSubmit?: (model: FormModel) => boolean;
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
    /**
     * Name of tree branch
     */
    name: string;
    /**
     * Parent tree branch
     */
    parent: string | null;
    /**
     * Can th childs be sorted
     */
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
    defaultValue?: string;
}
//# sourceMappingURL=tree.d.ts.map