import { Draggable } from "./draggable";

export class Sortable extends Draggable
{
    public onSortSuccess(data: IOnSortSuccessData): void
    {
        
    }
}

export interface IOnSortSuccessData
{
    lastIndex: number;
    index: number;
    positionChange: number; 
}
