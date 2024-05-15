import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

const useChangeQuery = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const createNewPath = useCallback(
    (name?: string, value?: string) => {
      if (name) {
        let newParams = searchParams.toString();
        const params = new URLSearchParams(newParams);
        value ? params.set(name, value) : params.delete(name);

        newParams = params.toString();
        return pathname + '?' + newParams;
      }
      return pathname;
    },
    [searchParams],
  );
  const changeQuery = useCallback(
    ({ name, value, routing = true }: { name?: string; value?: string; routing?: boolean }) => {
      const newPath = createNewPath(name, value);
      routing && router.push(newPath);
    },
    [createNewPath],
  );

  return { changeQuery, searchParams };
};

export default useChangeQuery;
