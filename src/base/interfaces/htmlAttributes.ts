export default interface HtmlAttributes
{
  [key: string]: any;
  id?: string;
  className?: string;
  style?: string;
  forId?: string;
  type?: string;
  name?: string;
  disabled?: boolean;
  value?: string;
  ariaLabel?: string;
  ariaHidden?: string;
  role?: string;
}
