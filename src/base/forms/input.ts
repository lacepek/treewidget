import { Component } from '../component';
import { ElementUtility } from '../utility/elementUtility';
import { FormAttribute } from './interfaces/formModel';

export default class Input extends Component<{}>
{
  public formAttribute: FormAttribute;
  public label: string;

  public onChange: (event: Event, input: Input, formAttribute: FormAttribute) => void;

  protected input: HTMLInputElement;

  public render(): void
  {
    this.setAttribute('class', 'form-group');

    const id = `input-${this.attributes.name}`;
    if (this.label) {
      const labelElement = ElementUtility.createElement('label', this.label, { forId: id });
      this.addContent(labelElement);
    }

    this.input = this.createElement('input', null, {
      ...{ className: 'form-control', id }, ...this.attributes
    }) as HTMLInputElement;

    this.input.onchange = (event: Event) =>
    {
      this.setValue(this.input.value);

      if (this.onChange) {
        this.onChange(event, this, this.formAttribute)
      }
    };

    this.element.appendChild(this.input);

    this.setValue(this.input.value);
  }

  public getValue(): string
  {
    return this.formAttribute.value;
  }

  public setValue(value: string): void
  {
    this.formAttribute.value = value;
  }

  protected setDefaultProps(): void
  {
    super.setDefaultProps();

    this.label = null;
    this.input = null;
    this.attributes = { type: 'text' };
  }
}
