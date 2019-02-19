import TreeWidget, { Config } from './treeWidget';
import './base/styles/modal.css';
import './styles/tree.css';
import { OnLineSubmitEvent, OnLineMoveEvent } from './tree';
import { StructureType } from './structure';

/**
 * Vytvoří widget
 * 
 * @param config
 */
export const create = (config: Config): void =>
{
  TreeWidget.create(config);
}

/**
 * Zaregistruje event callback editace řádku
 * 
 * @param onLineEditSubmit 
 */
export const setOnLineEditSubmit = (onLineEditSubmit: OnLineSubmitEvent): void =>
{
  TreeWidget.setOnLineEditSubmit(onLineEditSubmit);
}

/**
 * Zaregistruje event callback přidání řádku
 * 
 * @param onLineAddSubmit 
 */
export const setOnLineAddSubmit = (onLineAddSubmit: OnLineSubmitEvent): void =>
{
  TreeWidget.setOnLineAddSubmit(onLineAddSubmit);
}

/**
 * Zaregistruje event callback smazání řádku
 * 
 * @param onLineDeleteSubmit 
 */
export const setOnLineDeleteSubmit = (onLineDeleteSubmit: OnLineSubmitEvent): void =>
{
  TreeWidget.setOnLineDeleteSubmit(onLineDeleteSubmit);
}

/**
 * Zaregistruje event callback posunu řádku
 * 
 * @param onLineMove 
 */
export const setOnLineMove = (onLineMove: OnLineMoveEvent): void =>
{
  TreeWidget.setOnLineMove(onLineMove);
}

/**
 * Nastaví strukturu stromu
 * 
 * @param structure 
 */
export const setStructure = (structure: { [name: string]: StructureType }): void =>
{
  TreeWidget.setStructure(structure);
}
