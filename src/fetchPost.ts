const fetchPost = async (url: string, body: any): Promise<{}> =>
{
  const request = new Request(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body
  });
  const response = await fetch(request);
  return await response.json();
}

export default fetchPost;
