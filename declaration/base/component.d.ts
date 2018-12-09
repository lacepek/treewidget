import Configurable from "./configurable";
import IHtmlAttributes from "./interfaces/IhtmlAttributes";
/**
 * Base configurable component
 * @template T type of state
 */
export declare class Component<T> extends Configurable {
    attributes: IHtmlAttributes;
    parentElement: HTMLElement;
    element: HTMLElement;
    parentSelector: string;
    tag: string;
    parent: Component<T>;
    events: any;
    protected state: any;
    private _config;
    constructor(config?: any);
    setAttribute(name: string, value: any): void;
    setContent(value: any): void;
    addContent(value: any): void;
    clearContent(): void;
    show(): void;
    hide(): void;
    setState(state: T): void;
    protected init(): void;
    protected render(): void;
    protected postRender(): void;
    protected getParentElement(): HTMLElement;
    protected setDefaultProps(): void;
    protected createElement(tag?: string, content?: any, attributes?: IHtmlAttributes): HTMLElement;
}
//# sourceMappingURL=component.d.ts.map