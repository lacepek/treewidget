import { Component } from '../component';
import { FormAttribute } from './interfaces/formModel';
export default class Input extends Component<{}> {
    formAttribute: FormAttribute;
    label: string;
    onChange: (event: Event, input: Input, formAttribute: FormAttribute) => void;
    protected input: HTMLInputElement;
    render(): void;
    getValue(): string;
    setValue(value: string): void;
    protected setDefaultProps(): void;
}
//# sourceMappingURL=input.d.ts.map