import { DropZone } from './dropzone';
import { Sortable } from '../sortable';

export default class SortZone extends DropZone
{
  public onDrop(event: Event): void
  {
    let target = event.target as HTMLElement;

    let dragged = this.current.component.element;

    // if dragged is target do nothing 
    if (dragged === target) {
      return;
    }

    let targetChild = this.findChildByElement(target);

    if (targetChild) {
      let currentIndex = this.current.index;
      let targetIndex = targetChild.index;

      // if current is higher then the target put it after, otherwise put it before the target
      if (currentIndex > targetIndex) {
        this.element.insertBefore(dragged, target)
      } else {
        let nextSibling = target.nextElementSibling;
        if (nextSibling) {
          this.element.insertBefore(dragged, nextSibling)
        } else {
          this.element.appendChild(dragged);
        }
      }

      // move element in container list
      this.moveChild(currentIndex, targetIndex);

      // if dragged is also sortable, dispatch onSortSuccess event
      if (this.current.component instanceof Sortable) {
        let positionChange = targetIndex - currentIndex;
        this.current.component.onSortSuccess({ lastIndex: currentIndex, index: targetIndex, positionChange });
      }
    }
  }
}
