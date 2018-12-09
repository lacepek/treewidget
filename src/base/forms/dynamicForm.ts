import { IFormAttribute, IFormAttributeOption } from "./IformAttribute";
import { Component } from "../component";
import objectMap from "../utility/objectMap";
import Input from "./input";
import { ElementUtility } from "../utility/elementUtility";
import Select from "./select";
import Checkbox from "./checkbox";

export class DynamicForm extends Component<{}>
{
    public model: { [name: string]: IFormAttribute };

    protected render(): void
    {
        this.element = this.createElement();

        this.element.addEventListener("submit", (event: Event) => this.onSubmit(event))

        if (this.model) {
            const form = this.renderForm();

            this.setContent(form);
        }
    }

    protected setDefaultProps(): void
    {
        super.setDefaultProps();

        this.tag = "form";
    }

    protected onSubmit(event: any)
    {
        console.log("submit");
        /*event.preventDefault();

        if (this.onSubmit) {
            const result = this.props.onSubmit(this.state.model);
            if (result) {
                this.setState({ isLoading: false });
            }
        }*/
    }

    protected renderForm(): Array<Component<{}>>
    {
        const attributes = this.model;

        const formContent = objectMap(attributes, (attribute: IFormAttribute) =>
        {
            const { type } = attribute;

            let input = null;
            switch (type) {
                case "radio":
                    input = this.renderRadioList(attribute);
                    break;
                case "select":
                    input = this.renderSelect(attribute);
                    break;
                case "checkbox":
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
        return ElementUtility.createElement("div");
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

        return ElementUtility.createElement("div");
    }

    protected renderSelect(attribute: IFormAttribute): Select
    {
        const { name, value, options, label, disabled } = attribute;

        const optionElements = objectMap(options, (option: IFormAttributeOption) => 
        {
            const id = `option-${name}-${option.key}`;
            return ElementUtility.createElement("option", option.value, { id });
        });

        const selectId = `select-${name}`;
        const selectElement = new Select({ label, attributes: { name, disabled, value, id: selectId } });

        selectElement.addContent(optionElements);

        return selectElement;
    }

    protected renderCheckbox(attribute: IFormAttribute): Checkbox
    {
        const { name, type, label, value, disabled } = attribute;
        const checked = value;
        
        const checkbox = new Checkbox({
            label,
            onChange: this.onTextChange,
            attributes: { name, disabled, value, type }
        });

        checkbox.setAttribute("checked", checked);

        return checkbox;
    }

    private renderText(attribute: IFormAttribute): Input
    {
        const { name, type, label, value, disabled } = attribute;

        const input = new Input({
            label,
            onChange: this.onTextChange,
            attributes: { name, disabled, value, type }
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
