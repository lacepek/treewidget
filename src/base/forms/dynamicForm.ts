import { IFormAttribute, IFormAttributeOption } from './IformAttribute';
import { Component } from '../component';
import objectMap from '../utility/objectMap';
import Input from './input';
import { ElementUtility } from '../utility/elementUtility';

export class DynamicForm extends Component
{
    public model: { [name: string]: IFormAttribute };

    protected render(): void
    {
        super.render();

        this.element.addEventListener('submit', (event: Event) => this.onSubmit(event))

        if (this.model) {
            this.renderForm();
        }
    }

    protected setDefaultProps(): void
    {
        super.setDefaultProps();

        this.tag = 'form';
    }

    protected onSubmit(event: any)
    {
        console.log('submit');
        /*event.preventDefault();

        if (this.onSubmit) {
            const result = this.props.onSubmit(this.state.model);
            if (result) {
                this.setState({ isLoading: false });
            }
        }*/
    }

    protected renderForm(): void
    {
        const attributes = this.model;

        const formContent = objectMap(attributes, (attribute: IFormAttribute) =>
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

    protected renderRadioList(attribute: IFormAttribute): HTMLElement
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
            <div key={key} className="form-group">
                {labelElement}
                {radioWrapper}
            </div>
        );*/
        return ElementUtility.createElement('div');
    }

    protected renderRadio(key: string, type: string, option: IFormAttributeOption): HTMLElement
    {
        /*const checked = this.state.model.getAttribute(key).value === option.key;

        const radioKey = `${key}-${option.key}`, id = `radio-${radioKey}`,
            labelId = `${id}-label`, groupId = `${id}-group`;

        const radioElement = <input
            className="form-check-input"
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
            <div className="form-check" key={radioKey} id={groupId}>
                {radioElement}
                {labelElement}
            </div>
        );*/

        return ElementUtility.createElement('div');
    }

    protected renderSelect(attribute: IFormAttribute): HTMLElement
    {
        /*const { key, value, options, label, disabled } = attribute;

        const optionElements = objectMap(options, (option: IFormAttributeOption) => 
        {
            const optionKey = `${key}-${option.key}`, id = `option-${optionKey}`;
            return <option key={optionKey} id={id}  >
                {option.value}
            </option>
        });

        const selectId = `select-${key}`
        const selectElement = <select
            ref={this.references[key]}
            id={selectId}
            name={key}
            disabled={disabled}
            className="form-control"
            defaultValue={value}
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => { this.onSelectChange(event, key) }}
        >
            {optionElements}
        </select>

        let labelElement = null;
        if (label) {
            labelElement = <label htmlFor={selectId} id={`label-${key}`}>{label}</label>
        }

        return (
            <div key={key} className="form-group">
                {labelElement}
                {selectElement}
            </div>
        );*/

        return ElementUtility.createElement('div');
    }

    protected renderCheckbox(attribute: IFormAttribute): HTMLElement
    {
        /*const { key, type, label, value, disabled } = attribute;

        const id = `checkbox-${key}`;
        let labelElement = null;
        if (label) {
            labelElement = <label htmlFor={id} id={`label-${key}`}>{label}</label>
        }

        const checked = this.state.model.getAttribute(key).value;

        return (
            <div key={key} className="form-group">
                {labelElement}
                <input
                    className="form-input"
                    type={type}
                    ref={this.references[key]}
                    name={key}
                    id={id}
                    checked={checked}
                    disabled={disabled}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => { this.onCheckboxChange(event, key) }}
                />
            </div>
        );*/

        return ElementUtility.createElement('div');
    }

    private renderText(attribute: IFormAttribute): Input
    {
        const { name, type, label, value, disabled } = attribute;

        const input = new Input({
            parentElement: this.element, name, label, disabled, value, type: "text", onChange: this.onTextChange
        });

        return input;
    }

    protected onTextChange(event: Event, input: Input)
    {

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

        if (type === "number") {
            value = parseInt(value, 10);
        }

        return value;
    }*/
}
