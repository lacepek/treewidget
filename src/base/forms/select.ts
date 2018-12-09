import { Component } from "../component";
import { ElementUtility } from "../utility/elementUtility";

export default class Select extends Component<{}>
{
    public label: string;
    public name: string;
    public type: string;
    public value: string;
    public disabled: boolean;

    public onChange: (event: Event, select: Select) => void;

    protected select: HTMLSelectElement;

    public setContent(value: HTMLElement | Component<{}> | string | HTMLElement[] | Component<{}>[] | string[]): void
    {
        if (this.select) {
            ElementUtility.setContent(this.select, value);
        }
    }

    public addContent(value: HTMLElement | Component<{}> | string | HTMLElement[] | Component<{}>[] | string[]): void
    {
        if (this.select) {
            ElementUtility.addContent(this.select, value);
        }
    }

    public clearContent(): void
    {
        if (this.select) {
            ElementUtility.clearContent(this.select);
        }
    }

    public render(): void
    {
        this.element = ElementUtility.createElement("div", null, { className: "form-group" });

        const id = `select-${this.attributes.name}`;
        if (this.label) {
            const labelElement = ElementUtility.createElement("label", this.label, { forId: id });
            this.element.appendChild(labelElement);
        }

        this.select = ElementUtility.createElement("select", null, {
            className: "form-control",
            type: this.type,
            name: this.name,
            id: id,
            value: this.value,
            disabled: this.disabled
        }) as HTMLSelectElement;

        if (this.onChange) {
            this.select.addEventListener("change", (event: Event) => { this.onChange(event, this) });
        }

        this.element.appendChild(this.select);

        this.parentElement = this.getParentElement();
        if (this.parentElement) {
            this.parentElement.appendChild(this.element);
        }
    }

    public getValue(): string
    {
        return this.input.value;
    }

    public setValue(value: any): void
    {
        this.input.value = value;
    }

    protected setDefaultProps(): void
    {
        super.setDefaultProps();

        this.label = null;
        this.select = null;
        this.attributes = { type: "select" };
    }
}
