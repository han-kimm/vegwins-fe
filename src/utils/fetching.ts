type handlerParams = { path: string; body?: any };

class Fetching {
  #endpoint = 'http://localhost:8000';
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
      body: JSON.stringify(body),
    });
    if (!resp.ok) {
      throw Error('response is not OK');
    }
    const res = await resp.json();
    return res;
  }
}

export const customFetch = new Fetching();
