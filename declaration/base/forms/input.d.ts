import { Component } from "../component";
export default class Input extends Component {
    label: string;
    name: string;
    type: string;
    value: string;
    disabled: boolean;
    onChange: (event: Event, input: Input) => void;
    protected input: HTMLInputElement;
    render(): void;
    getValue(): string;
    setValue(value: any): void;
    protected setDefaultProps(): void;
}
//# sourceMappingURL=input.d.ts.map