import ajax from '@/utils/fetching';
import { useEffect, useState } from 'react';

interface Props<T> {
  init: T;
  path: string;
  deps?: any[];
  queryKey?: string[];
}

const useFetchedState = <T>({ init, deps, path, queryKey }: Props<T>) => {
  const [state, setState] = useState<T>(init);
  useEffect(() => {
    (async () => {
      const res = await ajax.get({ path, queryKey });
      setState(res);
    })();
  }, deps ?? []);

  return [state, setState];
};
export default useFetchedState;
