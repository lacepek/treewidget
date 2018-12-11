import { Draggable } from './draggable';

export class Sortable extends Draggable
{
  public onSortSuccess(data: OnSortSuccessData): void
  {

  }
}

export interface OnSortSuccessData
{
  lastIndex: number;
  index: number;
  positionChange: number;
}
