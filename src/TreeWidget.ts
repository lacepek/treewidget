import { Tree, OnLineSubmitEvent, OnLineMoveEvent } from './tree';
import { StructureType } from './structure';

export default class TreeWidget
{
  private static tree: Tree;

  public static create(config: object)
  {
    this.tree = new Tree(config);
  }

  public static setOnLineEditSubmit(onLineEditSubmit: OnLineSubmitEvent): void
  {
    this.tree.events.onLineEditSubmit = onLineEditSubmit;
  }

  public static setOnLineAddSubmit(onLineAddSubmit: OnLineSubmitEvent): void
  {
    this.tree.events.onLineAddSubmit = onLineAddSubmit;
  }

  public static setOnLineMove(onLineMove: OnLineMoveEvent): void
  {
    this.tree.events.onLineMove = onLineMove;
  }

  public static setStructure(structure: { [name: string]: StructureType })
  {
    this.tree.structure = structure;
  }
}
