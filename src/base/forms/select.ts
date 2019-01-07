import { Component } from '../component';
import { ElementUtility } from '../utility/elementUtility';
import { FormAttribute } from './interfaces/formModel';

export default class Select extends Component<{}>
{
  public formAttribute: FormAttribute;
  public label: string;

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
    this.setAttribute('class', 'form-group');

    const id = `select-${this.attributes.name}`;
    if (this.label) {
      const labelElement = this.createElement('label', this.label, { forId: id });
      this.element.appendChild(labelElement);
    }

    this.select = this.createElement('select', null, {
      className: 'form-control',
      type: this.attributes.type,
      name: this.attributes.name,
      id: id,
      value: this.attributes.value,
      disabled: this.attributes.disabled
    }) as HTMLSelectElement;

    this.select.onchange = (event: Event) =>
    {
      this.setValue(this.select.value);

      if (this.onChange) {
        this.onChange(event, this)
      }
    };

    this.element.appendChild(this.select);

    this.setValue(this.attributes.value);
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
    this.select = null;
    this.attributes = { type: 'select' };
  }
}
