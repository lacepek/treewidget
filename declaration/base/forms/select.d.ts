import { Component } from '../component';
import { FormAttribute } from './interfaces/formModel';
export default class Select extends Component<{}> {
    formAttribute: FormAttribute;
    label: string;
    onChange: (event: Event, select: Select) => void;
    protected select: HTMLSelectElement;
    setContent(value: HTMLElement | Component<{}> | string | HTMLElement[] | Component<{}>[] | string[]): void;
    addContent(value: HTMLElement | Component<{}> | string | HTMLElement[] | Component<{}>[] | string[]): void;
    clearContent(): void;
    render(): void;
    getValue(): string;
    setValue(value: string): void;
    protected setDefaultProps(): void;
}
//# sourceMappingURL=select.d.ts.map