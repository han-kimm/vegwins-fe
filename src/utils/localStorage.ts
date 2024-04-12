interface Args {
  key: string;
  value: any;
}

export const setLocalStorage = ({ key, value }: Args) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const getLocalStorage = (key: string) => {
  if (typeof window !== 'undefined') {
    return JSON.parse(localStorage.getItem(key) ?? 'null');
  }
  return null;
};
