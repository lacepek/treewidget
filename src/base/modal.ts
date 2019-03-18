import { Component, addContent, createElement } from 'component-base';

export class Modal extends Component<{ content?: any; title?: any }> {
  public content: any;
  public hasCloseButton: boolean;

  public onClose: () => void;

  private contentElement: HTMLElement;

  public init() {
    super.init();

    this.state.content = this.content;
  }

  protected render(): void {
    this.element.className = 'modal-overlay';

    this.contentElement = createElement('div', null, { className: 'modal-window-body' });

    const windowHeader = createElement('div', null, { className: 'modal-window-header' });
    const windowFooter = createElement('div', null, { className: 'modal-window-footer' });

    const window = createElement('div', [windowHeader, this.contentElement, windowFooter], {
      className: 'modal-window'
    });

    if (this.state.title) {
      windowHeader.appendChild(this.state.title);
    }

    if (this.hasCloseButton) {
      const icon = createElement('span', '&times;', { ariaHidden: 'true' });
      const closeButton = createElement('button', icon, {
        className: 'close',
        ariaLabel: 'Close'
      });
      closeButton.addEventListener('click', () => {
        this.close();
      });
      windowHeader.appendChild(closeButton);
    }

    if (this.state.content) {
      addContent(this.contentElement, this.state.content);
    }

    this.element.addEventListener('click', (event: Event) => {
      if (event.target === this.element) {
        this.close();
      }
    });

    addContent(this, window);
  }

  protected close() {
    this.hide();

    if (this.onClose) {
      this.onClose();
    }
  }

  protected setDefaultProps() {
    super.setDefaultProps();

    this.hasCloseButton = true;
    this.confirmButton = null;
    this.dismissButton = null;

    this.onConfirm = null;
    this.onDismiss = null;
    this.onClose = null;
  }
}
