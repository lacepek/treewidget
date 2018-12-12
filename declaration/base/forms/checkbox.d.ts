import { Component } from '../component';
import { FormAttribute } from './interfaces/formModel';
export default class Checkbox extends Component<{}> {
    formAttribute: FormAttribute;
    label: string;
    onChange: (event: Event, input: Checkbox) => void;
    protected checkbox: HTMLInputElement;
    render(): void;
    getValue(): boolean;
    setValue(value: boolean): void;
    protected setDefaultProps(): void;
}
//# sourceMappingURL=checkbox.d.ts.map