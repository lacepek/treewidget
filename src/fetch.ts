import RequestApi from 'react-request';

export async function fetchPost(
  url: string,
  body: any,
  authToken: string,
  authData: object,
  language: string
): Promise<{}>
{
  const response = await RequestApi.post(url, body, authToken, authData, language);

  return await response.json();
}

export async function fetchDelete(
  url: string,
  authToken: string,
  language: string
): Promise<{}>
{
  const response = await RequestApi.delete(url, authToken, language);

  return await response.json();
}