import { FormAttribute } from "./base/forms/interfaces/formModel";
import { DataNode } from "./tree";

export class Structure
{
  public hasBeenSorted: boolean = false;

  private readonly structure: StructureType = null;

  public constructor(structure: StructureType)
  {
    this.structure = structure;

    if (!this.structure.config) {
      this.structure.config = {};
    }
  }

  public getItems(): { [name: string]: FormAttribute }
  {
    return this.structure.items;
  }

  public getName(): string
  {
    return this.structure.name;
  }

  public getParentName(): string
  {
    return this.structure.parent;
  }

  public getLabel(): string
  {
    return this.structure.label;
  }

  public getConfig(): StructureConfig
  {
    return this.structure.config;
  }

  public getAddLineText(): string 
  {
    return this.getConfig().addLineText;
  }

  public getCanEdit(): boolean
  {
    return this.getConfig().canEdit;
  }

  public setCanEdit(canEdit: boolean): void
  {
    this.getConfig().canEdit = canEdit;
  }

  public getCanAdd(): boolean
  {
    return this.getConfig().canAdd;
  }

  public setCanAdd(canAdd: boolean): void
  {
    this.getConfig().canAdd = canAdd;
  }

  public getCanDelete(): boolean
  {
    return this.getConfig().canDelete;
  }

  public setCanDelete(canDelete: boolean): void
  {
    this.getConfig().canDelete = canDelete;
  }

  public getUseModalEdit(): boolean
  {
    return this.getConfig().useModalEdit;
  }

  public getIsSortable(): boolean
  {
    return this.getConfig().isSortable;
  }

  public getSortFunction(): CompareCallback
  {
    return this.getConfig().sortFunction;
  }

  public getStructureType(): StructureType
  {
    return this.structure;
  }

  public getCanEditFunction(): EditCallback
  {
    return this.getConfig().canEditFunction;
  }

  public getCanAddFunction(): EditCallback
  {
    return this.getConfig().canAddFunction;
  }

  public getIsSortableFunction(): EditCallback
  {
    return this.getConfig().isSortableFunction;
  }

  public getUseModalEditFunction(): EditCallback
  {
    return this.getConfig().useModalEditFunction;
  }

  public getEditUrl(): string
  {
    return this.getConfig().editUrl;
  }

  public getAddUrl(): string
  {
    return this.getConfig().addUrl;
  }

  public getDeleteUrl(): string
  {
    return this.getConfig().deleteUrl;
  }

  public getMoveLineUrl(): string
  {
    return this.getConfig().moveLineUrl;
  }
}

export type StructureType = {
  /**
   * Name of tree branch
   */
  readonly name: string;

  /**
   * Parent tree branch
   */
  readonly parent: string | null;

  /**
   * Visible name of tree branch
   */
  readonly label?: string;
  
  /**
   * Structure of items displayed
   */
  readonly items?: { [name: string]: FormAttribute };
  
  /**
   * Other level options
   */
  config?: StructureConfig;
}

export type StructureConfig = {
  /**
   * Is this level editable
   */
  canEdit?: boolean;

  /**
   * Is it possible to add lines on this level
   */
  canAdd?: boolean;

  /**
   * Is it possible to delete lines on this level
   */
  canDelete?: boolean;

  /**
   * Show modal for line editing
   */
  readonly useModalEdit?: boolean;

  /**
   * Text of add line
   */
  readonly addLineText?: string;

  /**
   * Can lines on this level be manually sorted
   */
  readonly isSortable?: boolean;

  /**
   * Custom sorting function, sorts once when the tree is initialized or when new line is added
   */
  readonly sortFunction?: CompareCallback;

  /**
   * Custom function for deciding which lines can be edited
   */
  readonly canEditFunction?: EditCallback;

  /**
   * Custom function for deciding which lines can be sorted
   */
  readonly isSortableFunction?: EditCallback;

  /**
   * Custom function for deciding where can lines be added
   */
  readonly canAddFunction?: EditCallback;

  /**
   * Custom function for deciding which lines can be edited in modal window
   */
  readonly useModalEditFunction?: EditCallback;

  readonly editUrl?: string;

  readonly addUrl?: string;

  readonly deleteUrl?: string;

  readonly moveLineUrl?: string;
}

export type CompareCallback = (dataA: DataNode, dataB: DataNode) => number;

export type EditCallback = (data: DataNode) => boolean; 
