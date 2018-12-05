import { IFormAttribute, IFormAttributeOption } from "./IformAttribute";
import { Component } from "../component";
import Input from "./input";
import Select from "./select";
import Checkbox from "./checkbox";
export declare class DynamicForm extends Component {
    model: {
        [name: string]: IFormAttribute;
    };
    protected render(): void;
    protected setDefaultProps(): void;
    protected onSubmit(event: any): void;
    protected renderForm(): Array<Component>;
    protected renderRadioList(attribute: IFormAttribute): HTMLElement;
    protected renderRadio(key: string, type: string, option: IFormAttributeOption): HTMLElement;
    protected renderSelect(attribute: IFormAttribute): Select;
    protected renderCheckbox(attribute: IFormAttribute): Checkbox;
    private renderText;
    protected onTextChange(event: Event, input: Input): void;
}
//# sourceMappingURL=dynamicForm.d.ts.map