import { Component } from "./component";
export declare class Modal extends Component {
    title: {
        size: number;
        text: string;
    };
    content: HTMLElement | Component | string | HTMLElement[] | Component[] | string[];
    hasCloseButton: boolean;
    dismissButton: HTMLElement;
    confirmButton: HTMLElement;
    onConfirm: () => void;
    onDismiss: () => void;
    onClose: () => void;
    private contentElement;
    setContent(value: HTMLElement | Component | string | HTMLElement[] | Component[] | string[]): void;
    addContent(value: HTMLElement | Component | string | HTMLElement[] | Component[] | string[]): void;
    clearContent(): void;
    protected render(): void;
    protected close(): void;
    protected setDefaultProps(): void;
}
//# sourceMappingURL=modal.d.ts.map