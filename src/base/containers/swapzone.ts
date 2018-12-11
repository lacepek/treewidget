import { DropZone } from './dropzone';

export default class SwapZone extends DropZone
{
  public onDrop(event: Event): void
  {
    let target = event.target as HTMLElement;
    let dragged = this.current.component.element;
    let nextSibling = target.nextElementSibling;

    if (nextSibling === dragged) {
      this.element.insertBefore(dragged, target);
    } else {
      this.element.insertBefore(target, dragged);

      // if it's not last element insert before otherwise put it to the end of the container
      if (nextSibling) {
        this.element.insertBefore(dragged, nextSibling)
      } else {
        this.element.appendChild(dragged);
      }
    }
  }
}
