import { FormAttribute, FormAttributeOption } from './interfaces/formModel';
import { Component } from '../component';
import Select from './select';
import Checkbox from './checkbox';
export declare class DynamicForm extends Component<{}> {
    model: {
        [name: string]: FormAttribute;
    };
    onSubmit: (model: {
        [name: string]: FormAttribute;
    }) => void;
    protected render(): void;
    protected setDefaultProps(): void;
    protected renderForm(): Array<Component<{}>>;
    protected renderRadioList(attribute: FormAttribute): HTMLElement;
    protected renderRadio(key: string, type: string, option: FormAttributeOption): HTMLElement;
    protected renderSelect(formAttribute: FormAttribute): Select;
    protected renderCheckbox(formAttribute: FormAttribute): Checkbox;
    private renderText;
}
//# sourceMappingURL=dynamicForm.d.ts.map