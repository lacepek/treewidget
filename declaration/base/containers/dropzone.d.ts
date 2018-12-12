import { Draggable } from '../draggable';
import { Container, ContainerChild } from './container';
export declare class DropZone extends Container<{}> {
    current: ContainerChild<{}>;
    canDrop: boolean;
    private hasRegisteredEvents;
    setCurrent(draggable: Draggable): void;
    protected render(): void;
    protected initEvents(): void;
    protected onDragOver(event: Event): void;
    protected onDragEnter(event: Event): void;
    protected onDragLeave(event: Event): void;
    protected onDrop(event: Event, target: HTMLElement): void;
    protected registerOnDropEvent(): void;
    protected setDefaultProps(): void;
}
//# sourceMappingURL=dropzone.d.ts.map