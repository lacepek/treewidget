export interface IFormAttribute
{
    name: string;
    value: any;
    type: string;
    label?: string;
    disabled?: boolean;
    options?: { [name: string]: IFormAttributeOption }
}

export interface IFormAttributeOption
{
    key: string;
    value: any;
    disabled?: boolean;
}
