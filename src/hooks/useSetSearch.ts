import { SP_COOKIE_NAME } from '@/constants/searchCookie';
import { setCookie } from '@/utils/cookie';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

const useSetSearch = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const createNewPath = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      const newParams = params.toString();
      const newPath = pathname + '?' + newParams;

      return newPath;
    },
    [searchParams],
  );
  const setCookieRouting = (...params: Parameters<typeof createNewPath>) => {
    const [name, value] = params;
    const newPath = createNewPath(name, value);
    setCookie({ key: SP_COOKIE_NAME, value: newPath });
    router.push(newPath);
  };

  return { setCookieRouting };
};

export default useSetSearch;
