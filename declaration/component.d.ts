import Configurable from "./configurable";
export declare class Component extends Configurable {
    attributes: IAttributes;
    parentElement: HTMLElement;
    element: HTMLElement;
    parentSelector: string;
    tag: string;
    parent: Component;
    events: any;
    private _config;
    constructor(config?: any);
    init(): void;
    render(): void;
    setAttribute(name: string, value: any): void;
    protected static createElement(tag: string, attributes?: IAttributes): HTMLElement;
    protected getParentElement(): HTMLElement;
    protected setDefaultProps(): void;
}
export interface IAttributes {
    id?: string;
    className?: string;
    style?: string;
}
//# sourceMappingURL=component.d.ts.map