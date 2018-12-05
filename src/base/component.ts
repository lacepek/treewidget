import Configurable from "./configurable";
import { ElementUtility } from "./utility/elementUtility";
import IHtmlAttributes from "./interfaces/IhtmlAttributes";

export class Component extends Configurable
{
    public attributes: IHtmlAttributes = null;

    public parentElement: HTMLElement;
    public element: HTMLElement;
    public parentSelector: string;
    public tag: string;
    public parent: Component;

    public events: any;

    private _config: any = {};

    public constructor(config: any = null)
    {
        super();

        this.setDefaultProps();

        this._config = config;

        this.init();

        this.innerRender();
    }

    public setAttribute(name: string, value: any): void
    {
        if (this.element) {
            ElementUtility.setAttribute(this.element, name, value);
        }
    }

    public setContent(value: HTMLElement | Component | string | Array<HTMLElement | Component | string>): void
    {
        if (this.element) {
            ElementUtility.setContent(this.element, value);
        }
    }

    public addContent(value: HTMLElement | Component | string | Array<HTMLElement | Component | string>): void
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

    protected init(): void
    {
        this.config(this._config);
    }

    protected render(): void
    {
        if (!this.element) {
            this.element = ElementUtility.createElement(this.tag, null, this.attributes);
        }

        this.parentElement = this.getParentElement();
        if (this.parentElement) {
            this.parentElement.appendChild(this.element);
        }
    }

    protected postRender(): void
    {

    }

    protected getParentElement(): HTMLElement
    {
        return this.parentSelector ? document.querySelector(this.parentSelector) : this.parentElement;
    }

    protected setDefaultProps(): void
    {
        this.attributes = { id: null, className: null, style: null };
        this.parentElement = null;
        this.element = null;
        this.parentSelector = null;
        this.tag = 'div';
        this.parent = null;
    }

    private innerRender(): void
    {
        this.render();

        this.postRender();
    }
}
