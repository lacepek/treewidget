import { Draggable } from "./draggable";
import { Container, IContainerChild } from "./container";
export declare class DropZone extends Container {
    current: IContainerChild;
    init(): void;
    initEvents(): void;
    setCurrent(draggable: Draggable): void;
    onDragOver(event: Event): void;
    onDragEnter(event: Event): void;
    onDragLeave(event: Event): void;
    onDrop(event: Event): void;
    protected setDefaultProps(): void;
}
//# sourceMappingURL=dropzone.d.ts.map