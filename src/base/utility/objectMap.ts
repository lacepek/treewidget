export default function objectMap(object: object, callback: any): any
{
  const result: { [key: string]: string } = {};
  const newObject = Object.assign({}, object);
  for (const key in newObject) {
    const value = (newObject as any)[key];
    const callbackResult = callback(value);
    result[key] = callbackResult;
  }

  return result;
}
