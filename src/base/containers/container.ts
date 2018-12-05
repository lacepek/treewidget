import { Component } from "../component";

export class Container extends Component
{
    protected children: Array<IContainerChild>;

    public addChild(child: Component): void
    {
        let size = this.children.length;
        this.children.push({index: size, component: child});
        child.parent = this;
    }

    public findChildByElement(element: HTMLElement): IContainerChild
    {
        for (let child of this.children) {
            if (child.component.element === element) {
                return child;
            }
        }

        return null;
    }

    public findChild(component: Component)
    {
        for (let child of this.children) {
            if (child.component === component) {
                return child;
            }
        }

        return null;
    }

    public moveChild(fromIndex: number, toIndex: number): void
    {
        let child = this.children[fromIndex];

        this.children.splice(fromIndex, 1);
        this.children.splice(toIndex, 0, child);

        this.resetIndexes();
    }

    protected resetIndexes()
    {
        for (let i = 0, n = this.children.length; i < n; i++) {
            this.children[i].index = i;
        }
    }

    protected setDefaultProps()
    {
        super.setDefaultProps();

        this.children = [];
    }
}

export interface IContainerChild
{
    index: number,
    component: Component;
}
