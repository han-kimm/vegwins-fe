type handlerParams = { path: string; body?: any };

class Fetching {
  async get({ path }: handlerParams) {
    const resp = await fetch(path);
    if (!resp.ok) {
      throw Error('response is not OK');
    }
    const res = await resp.json();
    return res;
  }
  async post({ path, body }: handlerParams) {
    const resp = await fetch(path, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(body),
      credentials: 'include',
    });
    const res = await resp.json();
    if (!resp.ok) {
      throw Error(res.error);
    }
    return res;
  }
}
const ajax = new Fetching();

export default ajax;
