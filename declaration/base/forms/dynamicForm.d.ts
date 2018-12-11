import { FormAttribute, FormAttributeOption } from './interfaces/formModel';
import { Component } from '../component';
import Input from './input';
import Select from './select';
import Checkbox from './checkbox';
export declare class DynamicForm extends Component<{}> {
    model: {
        [name: string]: FormAttribute;
    };
    onSubmitForm: (model: {
        [name: string]: FormAttribute;
    }) => void;
    protected render(): void;
    protected setDefaultProps(): void;
    protected onSubmit(event: any): void;
    protected renderForm(): Array<Component<{}>>;
    protected renderRadioList(attribute: FormAttribute): HTMLElement;
    protected renderRadio(key: string, type: string, option: FormAttributeOption): HTMLElement;
    protected renderSelect(attribute: FormAttribute): Select;
    protected renderCheckbox(attribute: FormAttribute): Checkbox;
    private renderText;
    protected onTextChange(event: Event, input: Input): void;
}
//# sourceMappingURL=dynamicForm.d.ts.map