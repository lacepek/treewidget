export interface FormModel
{
  [name: string]: FormAttribute
}

export interface FormAttribute
{
  name: string;
  value: any;
  type: string;
  label?: string;
  disabled?: boolean;
  options?: { [name: string]: FormAttributeOption }
}

export interface FormAttributeOption
{
  key: string;
  value: any;
  disabled?: boolean;
}
