import { DropZone } from './dropzone';

export default class SwapZone extends DropZone
{
  public onDrop(event: Event, target: HTMLElement): void
  {
    const dragged = this.current.component.element;
    const nextSibling = target.nextElementSibling;

    if (nextSibling === dragged) {
      this.element.insertBefore(dragged, target);
    } else {
      this.element.insertBefore(target, dragged);

      // if it's not last element insert before, otherwise put it to the end of the container
      if (nextSibling) {
        this.element.insertBefore(dragged, nextSibling)
      } else {
        this.element.appendChild(dragged);
      }
    }
  }

  protected registerOnDropEvent(): void
  {
    this.element.addEventListener('drop', (event: Event) =>
    {
      const target = this.findTarget(event.target as HTMLElement);
      return this.onDrop(event, target);
    });
  }

  private findTarget(target: HTMLElement): HTMLElement
  {
    if (target && !target.hasAttribute('draggable')) {
      target = target.parentElement;
      this.findTarget(target);
    }

    return target;
  }
}
