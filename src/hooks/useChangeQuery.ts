import { PREVIOUS_PATH } from '@/constants/localStorage';
import { setLocalStorage } from '@/utils/localStorage';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

const useChangeQuery = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const createNewPath = useCallback(
    (name?: string, value?: string) => {
      let newPath: string;
      let newParams = searchParams.toString();
      if (name) {
        const params = new URLSearchParams(newParams);
        value ? params.set(name, value) : params.delete(name);

        newParams = params.toString();
      }
      newPath = pathname + '?' + newParams;
      return newPath;
    },
    [searchParams],
  );
  const changeQuery = useCallback(
    ({ name, value, save = false, routing = true }: { name?: string; value?: string; save?: boolean; routing?: boolean }) => {
      const newPath = createNewPath(name, value);
      save && setLocalStorage({ key: PREVIOUS_PATH, value: newPath });
      routing && router.push(newPath);
    },
    [createNewPath],
  );

  return { changeQuery, searchParams };
};

export default useChangeQuery;
