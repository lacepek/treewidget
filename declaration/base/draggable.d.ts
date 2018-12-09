import { Component } from './component';
import { DropZone } from './containers/dropzone';
export declare class Draggable extends Component<{}> implements IDraggable {
    container: DropZone;
    canDrag: boolean;
    initDragEvents(): void;
    onDragStart(event: Event): void;
    onDragEnd(event: Event): void;
    private setAsCurrent;
    private clearCurrent;
}
export interface IDraggable {
    container: DropZone;
    canDrag: boolean;
    onDragEnd(event: any): void;
    onDragStart(event: any): void;
}
//# sourceMappingURL=draggable.d.ts.map