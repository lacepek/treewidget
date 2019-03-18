import { Component, IComponentConfig } from 'component-base';
import { DropZone } from './containers/dropzone';

export class Draggable extends Component<{}> implements IDraggable
{
  public container: DropZone;
  public canDrag: boolean;

  public constructor(config: IComponentConfig<{}>)
  {
    super(config);
  }

  public initDragEvents(): void
  {
    if (this.element) {
      this.element.addEventListener('dragstart', (event: any) => { this.onDragStart(event) });
      this.element.addEventListener('dragend', (event: any) => { this.onDragEnd(event) });
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

  protected setDefaultProps(): void
  {
    super.setDefaultProps();
    this.canDrag = false;
  }
}

export interface IDraggable
{
  container: DropZone;
  canDrag: boolean;

  onDragEnd(event: any): void;
  onDragStart(event: any): void;
}
