import { getCookie } from '@/utils/cookie';
import { getData } from '@/utils/fetching';
import { useEffect, useState } from 'react';

interface Props<T> {
  init: T;
  path: string;
  deps?: any[];
  queryKey?: string[];
  cache?: RequestCache;
}

const useFetchedState = <T>({ init, deps, path, queryKey, cache }: Props<T>) => {
  const [state, setState] = useState<T>(init);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    (async () => {
      const session = await getCookie('v_s');
      if (session) {
        try {
          setPending(true);
          const res = await getData({ path, queryKey, cache });
          if (!res.error) {
            setState(res);
          }
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
