import { Component } from '../component';
import { FormAttribute } from './interfaces/formModel';

export default class Checkbox extends Component<{}>
{
  public formAttribute: FormAttribute;
  public label: string;

  public onChange: (event: Event, input: Checkbox) => void;

  protected checkbox: HTMLInputElement;

  public render(): void
  {
    this.setAttribute('class', 'form-check');

    const id = `checkbox-${this.attributes.name}`;

    this.checkbox = this.createElement('input', null, {
      ...{ className: 'form-check-input', id }, ...this.attributes
    }) as HTMLInputElement;

    this.checkbox.onchange = (event: Event) =>
    {
      this.setValue(this.checkbox.checked);

      if (this.onChange) {
        this.onChange(event, this);
      }
    };

    this.addContent(this.checkbox);

    const label = this.label;
    if (label) {
      const labelClass = 'form-check-label';
      const labelElement = this.createElement('label', label, { className: labelClass, forId: id });
      this.addContent(labelElement);
    }

    this.setValue(this.checkbox.checked);
  }

  public getValue(): boolean
  {
    return this.formAttribute.value;
  }

  public setValue(value: boolean): void
  {
    this.formAttribute.value = value;
  }

  protected setDefaultProps(): void
  {
    super.setDefaultProps();

    this.label = null;
    this.input = null;
    this.attributes = { type: 'checkbox' };
  }
}
