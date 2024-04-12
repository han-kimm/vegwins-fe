import { PREVIOUS_PATH } from '@/constants/sessionStorage';
import { setSessionStorage } from '@/utils/sessionStorage';
import { usePathname, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

const useSavePath = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const createNewPath = useCallback(
    (name?: string, value?: string) => {
      let newPath: string;
      if (name) {
        const params = new URLSearchParams(searchParams.toString());
        value ? params.set(name, value) : params.delete(name);

        const newParams = params.toString();
        newPath = pathname + '?' + newParams;
        return newPath;
      }
      newPath = pathname;
      return newPath;
    },
    [searchParams],
  );
  const savePath = (...params: Parameters<typeof createNewPath>) => {
    const [name, value] = params;
    const newPath = createNewPath(name, value);
    setSessionStorage({ key: PREVIOUS_PATH, value: newPath });
  };

  return { savePath };
};

export default useSavePath;
