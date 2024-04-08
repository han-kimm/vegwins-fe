interface Args {
  key: string;
  value: any;
}

export const setSessionStorage = ({ key, value }: Args) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

export const getSessionStorage = (key: string) => {
  return JSON.parse(sessionStorage.getItem(key) ?? 'null');
};
