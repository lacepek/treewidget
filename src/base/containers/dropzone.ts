import { Draggable } from '../draggable';
import { Container, ContainerChild } from './container';

export class DropZone extends Container<{}>
{
  public current: ContainerChild<{}>;
  public canDrop: boolean;

  private hasRegisteredEvents: boolean = false;

  public setCurrent(draggable: Draggable): void
  {
    let child = this.findChild(draggable);

    if (child) {
      this.current = child;
    }
  }

  protected render(): void
  {
    super.render();

    this.initEvents();
  }

  protected initEvents(): void
  {
    if (!this.hasRegisteredEvents && this.canDrop && this.element) {
      this.element.addEventListener('dragover', this.onDragOver);
      this.element.addEventListener('dragenter', this.onDragEnter);
      this.element.addEventListener('dragleave', this.onDragLeave);
      this.registerOnDropEvent();

      this.hasRegisteredEvents = true;
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
    //throw new Error('onDragLeave not implemented.');
  }

  protected onDrop(event: Event, target: HTMLElement): void
  {
    let draggable = this.current.component;
    this.element.insertBefore(draggable.element, target);
  }

  protected registerOnDropEvent()
  {
    this.element.addEventListener('drop', (event: Event) =>
    {
      const target = event.target as HTMLElement;
      return this.onDrop(event, target)
    });
  }

  protected setDefaultProps(): void
  {
    super.setDefaultProps();

    this.current = null;
    this.canDrop = true;
  }
}
