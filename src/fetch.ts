import { RequestApi } from 'react-request'

export async function fetchPost(
  url: string,
  body: any,
  authToken: string,
  authData: object,
  language: string
): Promise<{}>
{
  const response = await RequestApi.post(url, authToken, language, authData, body);

  return await response.json();
}