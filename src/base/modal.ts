import { Component } from "./component";
import { ElementUtility } from "./utility/elementUtility";

export class Modal extends Component
{
    public title: { size: number, text: string };
    public content: HTMLElement | Component | string | Array<HTMLElement | Component | string>;
    public hasCloseButton: boolean;
    public dismissButton: HTMLElement;
    public confirmButton: HTMLElement;
    
    public onConfirm: () => void;
    public onDismiss: () => void;
    public onClose: () => void;
    
    private contentElement: HTMLElement;

    public setContent(value: HTMLElement | Component | string | Array<HTMLElement | Component | string>): void
    {
        if (this.contentElement) {
            ElementUtility.setContent(this.contentElement, value);
        }
    }

    public addContent(value: HTMLElement | Component | string | Array<HTMLElement | Component | string>): void
    {
        if (this.contentElement) {
            ElementUtility.addContent(this.contentElement, value);
        }
    }

    public clearContent(): void
    {
        if (this.contentElement) {
            ElementUtility.clearContent(this.contentElement);
        }
    }

    protected render(): void
    {
        super.render();

        this.element.className = "modal-overlay";

        const windowHeader = ElementUtility.createElement("div", null, { className: "modal-window-header" });
        this.contentElement = ElementUtility.createElement("div", null, { className: "modal-window-body" });
        const windowFooter = ElementUtility.createElement("div", null, { className: "modal-window-footer" });
        const window = ElementUtility.createElement(
            "div",
            new Array(windowHeader, this.contentElement, windowFooter),
            { className: "modal-window" }
        );

        if (this.title) {
            const titleElement = ElementUtility.createElement(`h${this.title.size}`, this.title.text);
            windowHeader.appendChild(titleElement);
        }

        if (this.hasCloseButton) {
            const icon = ElementUtility.createElement("span", "&times;", { ariaHidden: "true" });
            const closeButton = ElementUtility.createElement("button", icon, {
                className: "close",
                ariaLabel: "Close"
            });
            closeButton.addEventListener("click", () => { this.close() });
            windowHeader.appendChild(closeButton);
        }

        if (this.content) {
            this.addContent(this.content);
        }

        let buttonGroup = null;

        if (this.dismissButton) {
            this.dismissButton.addEventListener("click", () => {
                if (this.onDismiss) {
                    this.onDismiss();
                }

                this.close();
            });
        }

        if (this.confirmButton) {
            this.confirmButton.addEventListener("click", () => {
                if (this.onConfirm) {
                    this.onConfirm();
                }
            });
        }

        if (this.dismissButton || this.confirmButton) {
            buttonGroup = ElementUtility.createElement(
                "div",
                new Array(this.dismissButton, this.confirmButton),
                { className: "btn-group", role: "group" }
            );
        }

        ElementUtility.addContent(windowFooter, buttonGroup);

        this.element.addEventListener("click", (event: Event) => {
            if (event.target === this.element) {
                this.close()
            }
        });

        ElementUtility.addContent(this.element, window);
    }

    protected close()
    {
        this.hide();

        if (this.onClose) {
            this.onClose();
        }
    }

    protected setDefaultProps()
    {
        super.setDefaultProps();

        this.hasCloseButton = true;
        this.confirmButton = null;
        this.dismissButton = null;

        this.onConfirm = null;
        this.onDismiss = null;
        this.onClose = null;
    }
}
