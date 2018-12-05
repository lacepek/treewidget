import { Draggable } from "./draggable";
export declare class Sortable extends Draggable {
    onSortSuccess(data: IOnSortSuccessData): void;
}
export interface IOnSortSuccessData {
    lastIndex: number;
    index: number;
    positionChange: number;
}
//# sourceMappingURL=sortable.d.ts.map