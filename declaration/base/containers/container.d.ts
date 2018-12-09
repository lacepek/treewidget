import { Component } from "../component";
export declare class Container<T> extends Component<T> {
    protected children: Array<IContainerChild<T>>;
    render(): void;
    addChild(child: Component<T>): void;
    findChildByElement(element: HTMLElement): IContainerChild<T>;
    findChild(component: Component<T>): IContainerChild<T>;
    moveChild(fromIndex: number, toIndex: number): void;
    protected resetIndexes(): void;
    protected setDefaultProps(): void;
}
export interface IContainerChild<T> {
    index: number;
    component: Component<T>;
}
//# sourceMappingURL=container.d.ts.map