interface Args {
  key: string;
  value: any;
  maxAge?: number;
}

export const setLocalStorage = ({ key, value, maxAge }: Args) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, JSON.stringify({ value, expires: Date.now() + (maxAge ?? 60 * 10) * 1000 }));
  }
};

export const getLocalStorage = (key: string) => {
  if (typeof window !== 'undefined') {
    const itemJSON = localStorage.getItem(key);
    if (!itemJSON) {
      return null;
    }
    const item = JSON.parse(itemJSON);
    if (Date.now() > item.expires) {
      localStorage.removeItem(key);
      return null;
    }
    return item.value;
  }
  return null;
};
