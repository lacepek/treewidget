import { Draggable } from "../draggable";
import { Container, IContainerChild } from "./container";

export class DropZone extends Container<{}>
{
    public current: IContainerChild<{}>;

    public setCurrent(draggable: Draggable): void
    {
        let child = this.findChild(draggable);

        if (child) {
            this.current = child;
        }
    }

    protected postRender()
    {
        this.initEvents();
    }

    protected initEvents(): void
    {
        if (this.element) {
            this.element.addEventListener('dragover', this.onDragOver);
            this.element.addEventListener('dragenter', this.onDragEnter);
            this.element.addEventListener('dragleave', this.onDragLeave);
            this.element.addEventListener('drop', (event: Event) => { return this.onDrop(event) });
        }
    }

    protected onDragOver(event: Event): void
    {
        event.preventDefault();
    }

    protected onDragEnter(event: Event): void
    {
        event.preventDefault();
    }

    protected onDragLeave(event: Event): void
    {
        //throw new Error("onDragLeave not implemented.");
    }

    protected onDrop(event: Event): void
    {
        let target = event.target as HTMLElement;
        let draggable = this.current.component;
        this.element.insertBefore(draggable.element, target);
    }

    protected setDefaultProps(): void
    {
        super.setDefaultProps();

        this.current = null;
    }
}
