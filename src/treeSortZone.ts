import SortZone from './base/containers/sortzone';
import { TreeLine } from './treeLine';
import { ContainerChild } from './base/containers/container';
import { FormModel } from './base/forms/interfaces/formModel';
import { IDropZoneConfig } from './base/containers/dropzone';

export class TreeSortZone extends SortZone
{
  public data: any;
  public model: FormModel;

  public constructor(config: ITreeSortZoneConfig)
  {
    super(config);
  }

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

      if (this.canMoveChild(targetChild)) {
        this.moveChild(currentIndex, targetIndex);

        const positionChange = currentIndex - targetIndex;
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

    const child = children[fromIndex];

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
        return parent === targetParent && targetComponent.canDrag;
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

export interface ITreeSortZoneConfig extends IDropZoneConfig
{
  data: any;
  model?: FormModel;
}