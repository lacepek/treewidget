import { Component } from '../component';
import { FormAttribute, FormAttributeOption } from './interfaces/formModel';
import objectMapArray from '../utility/objectMapArray';

export default class Radio extends Component<{}>
{
  public formAttribute: FormAttribute;

  public onChange: (event: Event, input: Radio) => void;

  protected radios: HTMLInputElement[];

  protected render(): void
  {
    const name = this.formAttribute.name;
    const id = `radio-wrapper-${name}`;
    this.setAttribute('class', 'radio-wrapper');
    this.setAttribute('id', id);

    const radios = objectMapArray(this.formAttribute.options, (option: FormAttributeOption) =>
    {
      const wrapper = this.createElement('div', null, { className: 'form-check' });

      const id = `radio-${name}-${option.key}`;
      const radio = this.createElement('input', null, {
        ...{ className: 'form-check-input', id, type: 'radio', name, value: option.key },
      }) as HTMLInputElement;

      wrapper.appendChild(radio);

      const checked = this.formAttribute.value === option.key;

      if (checked) {
        radio.checked = checked;
        this.setValue(option.key);
      }

      radio.onchange = (event: Event) =>
      {
        this.setValue(radio.value);

        if (this.onChange) {
          this.onChange(event, this);
        }
      };

      this.radios.push(radio);

      const label = option.value;
      if (label) {
        const labelClass = 'form-check-label';
        const labelElement = this.createElement('label', label, { className: labelClass, forId: id });
        wrapper.appendChild(labelElement);
      }

      return wrapper;
    });

    const label = this.formAttribute.label;
    if (label) {
        const labelClass = 'form-label';
        const labelElement = this.createElement('label', label, { className: labelClass, forId: id });
        this.addContent(labelElement);
    }

    this.addContent(radios);
  }

  public getValue(): any
  {
    return this.formAttribute.value;
  }

  public setValue(value: any): void
  {
    this.formAttribute.value = value;
  }

  protected setDefaultProps(): void
  {
    super.setDefaultProps();

    this.label = null;
    this.input = null;
    this.attributes = {};
    this.radios = [];
  }
}
