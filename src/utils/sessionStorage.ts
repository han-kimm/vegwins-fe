interface Args {
  key: string;
  value: any;
}

export const setSessionStorage = ({ key, value }: Args) => {
  if (typeof window !== 'undefined') {
    sessionStorage.setItem(key, JSON.stringify(value));
  }
};

export const getSessionStorage = (key: string) => {
  if (typeof window !== 'undefined') {
    return JSON.parse(sessionStorage.getItem(key) ?? 'null');
  }
  return null;
};
