import DropZone from "./dropzone";
export default interface IDraggable {
    container: DropZone;
    canDrag: boolean;
    onDragEnd(event: any): void;
    onDragStart(event: any): void;
}
//# sourceMappingURL=idraggable.d.ts.map