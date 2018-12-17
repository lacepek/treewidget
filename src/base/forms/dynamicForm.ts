import { FormAttribute, FormAttributeOption } from './interfaces/formModel';
import { Component } from '../component';
import Input from './input';
import { ElementUtility } from '../utility/elementUtility';
import Select from './select';
import Checkbox from './checkbox';
import objectMapArray from '../utility/objectMapArray';
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
          input = this.renderRadioList(attribute);
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

  protected renderRadioList(attribute: FormAttribute): HTMLElement
  {
    /*const { key, type, options, label } = attribute;

    let radioElement = objectMap(options, (option: IFormAttributeOption) =>
    {
        return this.renderRadio(key, type, option);
    });

    const radioId = `input-wrapper-${key}`;
    const radioWrapper = <div id={radioId}>{radioElement}</div>;
    let labelElement = null;

    if (label) {
        labelElement = <label htmlFor={radioId}>{label}</label>;
    }

    return (
        <div key={key} className='form-group'>
            {labelElement}
            {radioWrapper}
        </div>
    );*/
    return ElementUtility.createElement('div');
  }

  protected renderRadio(key: string, type: string, option: FormAttributeOption): HTMLElement
  {
    /*const checked = this.state.model.getAttribute(key).value === option.key;

    const radioKey = `${key}-${option.key}`, id = `radio-${radioKey}`,
        labelId = `${id}-label`, groupId = `${id}-group`;

    const radioElement = <input
        className='form-check-input'
        type={type}
        id={id}
        name={key}
        key={id}
        checked={checked}
        value={option.value}
        disabled={option.disabled}
        onChange={
            (event: React.ChangeEvent<HTMLInputElement>) => { this.onRadioChange(event, key, option.key) }
        }
    />;
    const labelElement = <label id={labelId} htmlFor={id}>{option.value}</label>;

    return (
        <div className='form-check' key={radioKey} id={groupId}>
            {radioElement}
            {labelElement}
        </div>
    );*/

    return ElementUtility.createElement('div');
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

  /*protected onSelectChange(event: React.ChangeEvent<HTMLSelectElement>, key: string)
  {
      const input = this.references[key].current;

      let value = input.value;

      this.validate(key, value);

      this.state.model.setValue(key, value);
  }

  protected onRadioChange(event: React.ChangeEvent<HTMLInputElement>, key: string, optionKey: any)
  {
      this.validate(key, optionKey);

      this.state.model.setValue(key, optionKey);

      this.setState({ model: this.state.model });
  }

  protected onCheckboxChange(event: React.ChangeEvent<HTMLInputElement>, key: string)
  {
      let value = event.target.checked;

      this.validate(key, value);

      this.state.model.setValue(key, value);

      this.setState({ model: this.state.model });
  }

  private validate(key: string, value: any): any
  {
      const { type } = this.state.model.getAttribute(key);

      if (type === 'number') {
          value = parseInt(value, 10);
      }

      return value;
  }*/
}
