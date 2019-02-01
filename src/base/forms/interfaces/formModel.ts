export interface FormModel
{
  [name: string]: FormAttribute
}

export interface FormAttribute
{
  name: string;
  type: string;
  value?: any;
  label?: string;
  disabled?: boolean;
  isHidden?: boolean;
  options?: { [name: string]: FormAttributeOption };
}

export interface FormAttributeOption
{
  key: string;
  value: any;
  disabled?: boolean;
}
