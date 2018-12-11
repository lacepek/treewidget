import { Draggable } from './draggable';
export declare class Sortable extends Draggable {
    onSortSuccess(data: OnSortSuccessData): void;
}
export interface OnSortSuccessData {
    lastIndex: number;
    index: number;
    positionChange: number;
}
//# sourceMappingURL=sortable.d.ts.map