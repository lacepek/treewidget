import { Component } from '../component';
export declare class Container<T> extends Component<T> {
    protected children: Array<ContainerChild<T>>;
    addChild(child: Component<T>): void;
    findChildByElement(element: HTMLElement): ContainerChild<T>;
    findChild(component: Component<T>): ContainerChild<T>;
    moveChild(fromIndex: number, toIndex: number): void;
    protected resetIndexes(): void;
    protected setDefaultProps(): void;
}
export interface ContainerChild<T> {
    index: number;
    component: Component<T>;
}
//# sourceMappingURL=container.d.ts.map