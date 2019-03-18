import { Form } from 'react-form';
import ITreeFormConfig from './interfaces/iTreeFormConfig';
import { createElement, addContent } from 'component-base';

class TreeForm extends Form {
  public onCancel: () => void;

  public constructor(config: ITreeFormConfig) {
    super(config);
  }

  protected render(): void {
    super.render();

    const cancelButton = createElement('button', 'Cancel', { className: 'btn btn-default', type: 'button' });
    if (this.onCancel) {
      cancelButton.onclick = () => {
        this.onCancel();
      };
    }

    const submitButton = createElement('button', 'Submit', { className: 'btn btn-primary' });

    const group = createElement('div', [cancelButton, submitButton], { className: 'btn-group', role: 'group' });

    addContent(this, group);
  }
}

export default TreeForm;
