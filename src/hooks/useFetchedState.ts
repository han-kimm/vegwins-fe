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
  const [pending, setPending] = useState(true);

  useEffect(() => {
    (async () => {
      if (await ajax.checkAuth()) {
        try {
          setPending(true);
          const res = await ajax.get({ path, queryKey });
          setState(res);
        } catch (e) {
          console.error(e);
        } finally {
          setPending(false);
        }
      }
      setPending(false);
    })();
  }, deps ?? []);

  return { state, setState, pending };
};
export default useFetchedState;
