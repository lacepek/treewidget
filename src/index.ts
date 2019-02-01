import TreeWidget from './treeWidget';
import './base/styles/modal.css';
import './styles/tree.css';
import { OnLineSubmitEvent, OnLineMoveEvent } from './tree';
import { StructureType } from './structure';

export function create(config: object)
{
  TreeWidget.create(config);
}

export function setOnLineEditSubmit(onLineEditSubmit: OnLineSubmitEvent): void
{
  TreeWidget.setOnLineEditSubmit(onLineEditSubmit);
}

export function setOnLineAddSubmit(onLineAddSubmit: OnLineSubmitEvent): void
{
  TreeWidget.setOnLineAddSubmit(onLineAddSubmit);
}

export function setOnLineDeleteSubmit(onLineDeleteSubmit: OnLineSubmitEvent): void
{
  TreeWidget.setOnLineDeleteSubmit(onLineDeleteSubmit);
}

export function setOnLineMove(onLineMove: OnLineMoveEvent): void
{
  TreeWidget.setOnLineMove(onLineMove);
}

export function setStructure(structure: { [name: string]: StructureType }): void
{
  TreeWidget.setStructure(structure);
}
