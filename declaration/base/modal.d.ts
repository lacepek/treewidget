import { Component } from './component';
export declare class Modal extends Component<{
    content: any;
}> {
    title: {
        size: number;
        text: string;
    };
    content: any;
    hasCloseButton: boolean;
    onClose: () => void;
    private contentElement;
    init(): void;
    protected render(): void;
    protected close(): void;
    protected setDefaultProps(): void;
}
//# sourceMappingURL=modal.d.ts.map