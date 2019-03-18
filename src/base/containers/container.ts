import { Component } from 'component-base';

export class Container<T> extends Component<T>
{
  protected children: Array<ContainerChild<T>>;

  public addChild(child: Component<T>): void
  {
    const size = this.children.length;
    this.children.push({ index: size, component: child });
    child.parent = this;
  }

  public findChildByElement(element: HTMLElement): ContainerChild<T>
  {
    for (const child of this.children) {
      if (child.component.element === element) {
        return child;
      }
    }

    return null;
  }

  public findChild(component: Component<T>)
  {
    for (const child of this.children) {
      if (child.component === component) {
        return child;
      }
    }

    return null;
  }

  public moveChild(fromIndex: number, toIndex: number): void
  {
    const child = this.children[fromIndex];

    this.children.splice(fromIndex, 1);
    this.children.splice(toIndex, 0, child);

    this.resetIndexes();
  }

  protected resetIndexes(): void
  {
    for (let i = 0, n = this.children.length; i < n; i++) {
      this.children[i].index = i;
    }
  }

  protected setDefaultProps(): void
  {
    super.setDefaultProps();

    this.children = [];
  }
}

export interface ContainerChild<T>
{
  index: number,
  component: Component<T>;
}
