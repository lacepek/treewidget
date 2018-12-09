import { Draggable } from "../draggable";
import { Container, IContainerChild } from "./container";
export declare class DropZone extends Container<{}> {
    current: IContainerChild<{}>;
    setCurrent(draggable: Draggable): void;
    protected postRender(): void;
    protected initEvents(): void;
    protected onDragOver(event: Event): void;
    protected onDragEnter(event: Event): void;
    protected onDragLeave(event: Event): void;
    protected onDrop(event: Event): void;
    protected setDefaultProps(): void;
}
//# sourceMappingURL=dropzone.d.ts.map