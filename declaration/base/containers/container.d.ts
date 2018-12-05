import { Component } from "../component";
export declare class Container extends Component {
    protected children: Array<IContainerChild>;
    addChild(child: Component): void;
    findChildByElement(element: HTMLElement): IContainerChild;
    findChild(component: Component): IContainerChild;
    moveChild(fromIndex: number, toIndex: number): void;
    protected resetIndexes(): void;
    protected setDefaultProps(): void;
}
export interface IContainerChild {
    index: number;
    component: Component;
}
//# sourceMappingURL=container.d.ts.map