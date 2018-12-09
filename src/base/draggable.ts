import { Component } from './component';
import { DropZone } from './containers/dropzone';

export class Draggable extends Component<{}> implements IDraggable
{
    public container: DropZone;
    public canDrag: boolean = false;

    public initDragEvents(): void
    {
        if (this.element) {
            this.element.addEventListener('dragstart', (event) => { this.onDragStart(event) });
            this.element.addEventListener('dragend', (event) => { this.onDragEnd(event) });
        }
    }

    public onDragStart(event: Event): void
    {
        this.setAsCurrent();
    }

    public onDragEnd(event: Event): void
    {
        this.clearCurrent();
    }

    // sets the current dragged element in container
    private setAsCurrent(): void
    {
        this.container.setCurrent(this);
    }

    // clears the current dragged element in container
    private clearCurrent(): void
    {
        this.container.current = null;
    }
}

export interface IDraggable
{
    container: DropZone;
    canDrag: boolean;

    onDragEnd(event: any): void;
    onDragStart(event: any): void;
}
