export default function objectFilter(object: { [key: string]: any }, callback: (item: any) => boolean): any
{
  let result: { [key: string]: any } = {};
  for (const key in object) {
    let value = object[key];
    let callbackResult = callback(value);

    if (callbackResult) {
      result[key] = value;
    }
  }

  return result;
}
