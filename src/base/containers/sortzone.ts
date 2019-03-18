import { Sortable } from '../sortable';
import SwapZone from './swapzone';

export default class SortZone extends SwapZone
{
  public onDrop(event: Event, target: HTMLElement): void
  {
    if (!this.current) {
      return;
    }

    const dragged = this.current.component.element;

    // if dragged is target do nothing
    if (dragged === target) {
      return;
    }

    const targetChild = this.findChildByElement(target);

    if (targetChild) {
      const currentIndex = this.current.index;
      const targetIndex = targetChild.index;

      // if current is higher then the target put it after, otherwise put it before the target
      if (currentIndex > targetIndex) {
        this.element.insertBefore(dragged, target);
      } else {
        const nextSibling = target.nextElementSibling;
        if (nextSibling) {
          this.element.insertBefore(dragged, nextSibling);
        } else {
          this.element.appendChild(dragged);
        }
      }

      // move element in container list
      this.moveChild(currentIndex, targetIndex);

      // if dragged is also sortable, dispatch onSortSuccess event
      if (this.current.component instanceof Sortable) {
        const positionChange = targetIndex - currentIndex;
        this.current.component.onSortSuccess({ lastIndex: currentIndex, index: targetIndex, positionChange });
      }
    }
  }
}