import { DynamicForm } from './base/forms/dynamicForm';

export class TreeForm extends DynamicForm
{
  public onCancel: () => void;

  protected render(): void
  {
    super.render();

    const cancelButton = this.createElement('button', 'Cancel', { className: 'btn btn-default', type: 'button' });
    if (this.onCancel) {
      cancelButton.onclick = () => { this.onCancel(); };
    }

    const submitButton = this.createElement('button', 'Submit', { className: 'btn btn-primary' });

    const group = this.createElement('div', [cancelButton, submitButton], { className: 'btn-group', role: 'group' });

    this.addContent(group);
  }
}
