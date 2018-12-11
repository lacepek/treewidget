import { DynamicForm } from './base/forms/dynamicForm';

export class TreeForm extends DynamicForm 
{
  public onCancel: () => void;

  protected render()
  {
    super.render();

    const cancelButton = this.createElement('button', 'Cancel', { className: 'btn btn-default', type: 'button' });
    if (this.onCancel) {
      cancelButton.addEventListener('click', () =>
      {
        this.onCancel();
      });
    }

    const submitButton = this.createElement('button', 'Submit', { className: 'btn btn-primary' });

    let buttonGroup = null;
    buttonGroup = this.createElement(
      'div',
      [cancelButton, submitButton],
      { className: 'btn-group', role: 'group' }
    );

    this.addContent(buttonGroup);
  }
}
