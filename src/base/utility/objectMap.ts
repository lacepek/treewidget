export default function objectMap(object: object, callback: any): any
{
  let result: { [key: string]: string } = {};
  for (const key in object) {
    let value = (object as any)[key];
    let callbackResult = callback(value);

    result[key] = callbackResult;
  }

  return result;
}
