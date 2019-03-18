import { Draggable } from './draggable';
import { IComponentConfig } from 'component-base';

export class Sortable extends Draggable
{
  public constructor(config: IComponentConfig<{}>)
  {
    super(config);
  }

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