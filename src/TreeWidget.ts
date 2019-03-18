import { Tree, OnLineSubmitEvent, OnLineMoveEvent, DataNode, TreeConfig } from './tree';
import { StructureType } from './structure';

export default class TreeWidget
{
  private static tree: Tree;

  /**
   * Vytvoří widget
   *
   * @param config
   */
  public static create(config: Config)
  {
    this.tree = new Tree(config);
  }

  /**
   * Zaregistruje event callback editace řádku
   *
   * @param onLineEditSubmit
   */
  public static setOnLineEditSubmit(onLineEditSubmit: OnLineSubmitEvent): void
  {
    this.tree.events.onLineEditSubmit = onLineEditSubmit;
  }

  /**
   * Zaregistruje event callback přidání řádku
   *
   * @param onLineAddSubmit
   */
  public static setOnLineAddSubmit(onLineAddSubmit: OnLineSubmitEvent): void
  {
    this.tree.events.onLineAddSubmit = onLineAddSubmit;
  }

  /**
   * Zaregistruje event callback smazání řádku
   *
   * @param onLineDeleteSubmit
   */
  public static setOnLineDeleteSubmit(onLineDeleteSubmit: OnLineSubmitEvent): void
  {
    this.tree.events.onLineDeleteSubmit = onLineDeleteSubmit;
  }

  /**
   * Zaregistruje event callback posunu řádku
   *
   * @param onLineMove
   */
  public static setOnLineMove(onLineMove: OnLineMoveEvent): void
  {
    this.tree.events.onLineMove = onLineMove;
  }

  /**
   * Nastaví strukturu stromu
   *
   * @param structure
   */
  public static setStructure(structure: { [name: string]: StructureType })
  {
    this.tree.structures = structure;
  }
}

export type Config = {
  /**
   * id nebo class rodičovského elementu
   */
  parentSelector: string;

  /**
   * Data pro zobrazení
   */
  data: Array<DataNode>;

  /**
   * Nastavení struktury stromu
   */
  structures: { [name: string]: StructureType };

  /**
   * Další nastavení
   */
  config: TreeConfig;
};