type handlerParams = { path: string; body?: any };

class Fetching {
  #endpoint = 'https://localhost:8000';
  async get({ path }: handlerParams) {
    const resp = await fetch(this.#endpoint + path);
    if (!resp.ok) {
      throw Error('response is not OK');
    }
    const res = await resp.json();
    return res;
  }
  async post({ path, body }: handlerParams) {
    const resp = await fetch(this.#endpoint + path, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(body),
      credentials: 'include',
    });
    if (!resp.ok) {
      throw Error('response is not OK');
    }
    const res = await resp.json();
    return res;
  }
}
const ajax = new Fetching();

export default ajax;
