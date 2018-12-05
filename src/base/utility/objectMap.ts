export default function objectMap(object: object, callback: any): any
{
    let result = [];
    for (const key in object) {
        let value = object[key];
        let callbackResult = callback(value);

        result.push(callbackResult);
    }

    return result;
}
