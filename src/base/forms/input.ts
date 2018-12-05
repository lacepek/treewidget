import { Component } from "../component";
import { ElementUtility } from "../utility/elementUtility";

export default class Input extends Component
{
    public label: string;
    public name: string;
    public type: string;
    public value: string;
    public disabled: boolean;

    public onChange: (event: Event, input: Input) => void;

    protected input: HTMLInputElement;

    public render(): void
    {
        super.render();

        this.setAttribute('class', 'form-group');

        const id = `input-${this.name}`;
        if (this.label) {
            const labelElement = ElementUtility.createElement('label', null, { forId: id });
            this.parentElement.appendChild(labelElement);
        }

        this.input = ElementUtility.createElement('input', null, {
            className: 'form-control',
            type: this.type,
            name: this.name,
            id: id,
            value: this.value,
            disabled: this.disabled
        }) as HTMLInputElement;

        this.input.addEventListener('change', (event: Event) => { this.onChange(event, this) })

        this.parentElement.appendChild(this.input);
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
        this.tag = 'div';
        this.type = 'text';
    }
}
