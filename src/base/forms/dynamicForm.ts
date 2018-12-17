import { FormAttribute, FormAttributeOption } from './interfaces/formModel';
import { Component } from '../component';
import Input from './input';
import { ElementUtility } from '../utility/elementUtility';
import Select from './select';
import Checkbox from './checkbox';
import objectMapArray from '../utility/objectMapArray';
import Radio from './radio';
import objectFilter from '../utility/objectFilter';

export class DynamicForm extends Component<{}>
{
  public model: { [name: string]: FormAttribute };

  public onSubmit: (model: { [name: string]: FormAttribute }) => void;

  protected render(): void
  {
    this.element.onsubmit = (event: Event) =>
    {
      if (this.onSubmit) {
        this.onSubmit(this.model);
      }

      return false;
    };

    if (this.model) {
      const form = this.renderForm();

      this.setContent(form);
    }
  }

  protected setDefaultProps(): void
  {
    super.setDefaultProps();

    this.tag = 'form';
  }

  protected renderForm(): Array<Component<{}>>
  {
    const attributes = objectFilter(this.model, (attribute: FormAttribute) => {
      return !attribute.isHidden;
    });

    const formContent = objectMapArray(attributes, (attribute: FormAttribute) =>
    {
      const { type } = attribute;

      let input = null;
      switch (type) {
        case 'radio':
          input = this.renderRadio(attribute);
          break;
        case 'select':
          input = this.renderSelect(attribute);
          break;
        case 'checkbox':
          input = this.renderCheckbox(attribute);
          break;
        default:
          input = this.renderText(attribute);
          break;
      }

      return input;
    });

    return formContent;
  }

  protected renderRadio(formAttribute: FormAttribute): Radio
  {
    const radio = new Radio({formAttribute});

    return radio;
  }

  protected renderSelect(formAttribute: FormAttribute): Select
  {
    const { name, value, options, label, disabled } = formAttribute;

    const optionElements = objectMapArray(options, (option: FormAttributeOption) => 
    {
      const id = `option-${name}-${option.key}`;
      const selected = value === option.key;
      return ElementUtility.createElement('option', option.value, { id, value: option.key, selected });
    });
    const selectId = `select-${name}`;
    const selectElement = new Select({ formAttribute, label, attributes: { name, disabled, value, id: selectId } });

    selectElement.addContent(optionElements);

    return selectElement;
  }

  protected renderCheckbox(formAttribute: FormAttribute): Checkbox
  {
    const { name, type, label, value, disabled } = formAttribute;
    const checked = value;

    const checkbox = new Checkbox({
      formAttribute,
      label,
      attributes: { name, disabled, value, type }
    });

    checkbox.setAttribute('checked', checked);

    return checkbox;
  }

  private renderText(formAttribute: FormAttribute): Input
  {
    const { name, type, label, value, disabled } = formAttribute;

    const input = new Input({
      formAttribute,
      label,
      attributes: { name, disabled, value, type }
    });

    return input;
  }
}
