import { Component } from "../component";
import { ElementUtility } from "../utility/elementUtility";

export default class Checkbox extends Component
{
    public label: string;

    public onChange: (event: Event, input: Checkbox) => void;

    protected checkbox: HTMLInputElement;

    public render(): void
    {
        this.element = ElementUtility.createElement("div", null, { className: "form-check" });

        const id = `checkbox-${this.name}`;

        this.checkbox = ElementUtility.createElement("input", null, {
            ...{ className: "form-check-input", id }, ...this.attributes
        }) as HTMLInputElement;

        if (this.onChange) {
            this.checkbox.addEventListener("change", (event: Event) => { this.onChange(event, this) });
        }

        this.addContent(this.checkbox);

        const label = this.label;
        if (label) {
            const labelClass = "form-check-input";
            const labelElement = ElementUtility.createElement("label", label, { className: labelClass, forId: id });
            this.addContent(labelElement);
        }

        this.parentElement = this.getParentElement();
        if (this.parentElement) {
            this.parentElement.appendChild(this.element);
        }
    }

    public getValue(): boolean
    {
        return this.checkbox.checked;
    }

    public setValue(value: boolean): void
    {
        this.checkbox.checked = value;
    }

    protected setDefaultProps(): void
    {
        super.setDefaultProps();

        this.label = null;
        this.input = null;
        this.attributes = { type: "checkbox" };
    }
}
