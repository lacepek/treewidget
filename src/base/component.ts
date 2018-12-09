import Configurable from "./configurable";
import { ElementUtility } from "./utility/elementUtility";
import IHtmlAttributes from "./interfaces/IhtmlAttributes";

/**
 * Base configurable component
 * @template T type of state
 */
export class Component<T> extends Configurable
{
    public attributes: IHtmlAttributes = null;

    public parentElement: HTMLElement;
    public element: HTMLElement;
    public parentSelector: string;
    public tag: string;
    public parent: Component<T>;

    public events: any;

    protected state: any;

    private _config: any = {};

    public constructor(config: any = null)
    {
        super();

        this.setDefaultProps();

        this._config = config;

        this.init();

        this.render();

        this.postRender();

        this.parentElement = this.getParentElement();
        if (this.element && this.parentElement) {
            ElementUtility.addContent(this.parentElement, this.element);
        }
    }

    public setAttribute(name: string, value: any): void
    {
        if (this.element) {
            ElementUtility.setAttribute(this.element, name, value);
        }
    }

    public setContent(value: any): void
    {
        if (this.element) {
            ElementUtility.setContent(this.element, value);
        }
    }

    public addContent(value: any): void
    {
        if (this.element) {
            ElementUtility.addContent(this.element, value);
        }
    }

    public clearContent(): void
    {
        if (this.element) {
            ElementUtility.clearContent(this.element);
        }
    }

    public show(): void
    {
        this.element.style.visibility = "visible";
    }

    public hide(): void
    {
        this.element.style.visibility = "hidden";
    }

    public setState(state: T)
    {
        this.state = state;

        this.clearContent();

        this.render();
    }

    protected init(): void
    {
        this.config(this._config);

        this.parentElement = this.getParentElement();
    }

    protected render(): void { }

    protected postRender(): void { }

    protected getParentElement(): HTMLElement
    {
        if (this.parentElement) {
            return this.parentElement;
        } else if (this.parentSelector) {
            return document.querySelector(this.parentSelector);
        }

        return null;
    }

    protected setDefaultProps(): void
    {
        this.attributes = { id: null, className: null, style: null };
        this.parentElement = null;
        this.element = null;
        this.parentSelector = null;
        this.tag = 'div';
        this.parent = null;
        this.state = {};
    };


    protected createElement(tag: string = this.tag, content?: any, attributes: IHtmlAttributes = this.attributes): HTMLElement
    {
        if (!tag) {
            return null;
        }

        return ElementUtility.createElement(tag, content, attributes);
    }
}
