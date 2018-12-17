import SortZone from "./base/containers/sortzone";
import { TreeLine } from "./treeLine";
import { ContainerChild } from "./base/containers/container";

export class TreeSortZone extends SortZone
{
  public data: any;

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
      let currentIndex = this.current.index;
      let targetIndex = targetChild.index;

      if (this.canMoveChild(targetChild)) {
        this.moveChild(currentIndex, targetIndex);

        let positionChange = targetIndex - currentIndex;
        this.current.component.onSortSuccess({ lastIndex: currentIndex, index: targetIndex, positionChange });
      }
    }
  }

  public moveChild(fromIndex: number, toIndex: number): void
  {
    if (!this.hasChildren()) {
      return;
    }
    
    const children = this.current.component.parent.data.children;

    let child = children[fromIndex];

    children.splice(fromIndex, 1);
    children.splice(toIndex, 0, child);

    this.resetIndexes();
  }

  private canMoveChild(target: ContainerChild<{}>): boolean
  {
    if (!this.hasChildren()) {
      return false;
    }

    const targetComponent = target.component;
    if (targetComponent instanceof TreeLine) {
      const targetParent = targetComponent.parent;
      const parent = this.current.component.parent;
      if (targetParent && targetParent.data && targetParent.data.children) {
        return parent === targetParent;
      }
    }

    return false;
  }

  private hasChildren(): boolean
  {
    const component = this.current.component;
    if (component instanceof TreeLine) {
      const parent = component.parent;
      if (parent && parent.data && parent.data.children) {
        return true;
      }
    }

    return false;
  }
}
