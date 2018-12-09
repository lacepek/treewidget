import { Component } from "../component";
import { ElementUtility } from "../utility/elementUtility";

export default class Input extends Component<{}>
{
    public label: string;

    public onChange: (event: Event, input: Input) => void;

    protected input: HTMLInputElement;

    public render(): void
    {
        this.element = ElementUtility.createElement("div", null, { className: "form-group" });

        const id = `input-${this.attributes.name}`;
        if (this.label) {
            const labelElement = ElementUtility.createElement("label", this.label, { forId: id });
            this.addContent(labelElement);
        }

        this.input = ElementUtility.createElement("input", null, {
            ...{ className: "form-control", id }, ...this.attributes
        }) as HTMLInputElement;

        if (this.onChange) {
            this.input.addEventListener("change", (event: Event) => { this.onChange(event, this) });
        }

        this.element.appendChild(this.input);

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
        this.input = null;
        this.attributes = { type: "text" };
    }
}
