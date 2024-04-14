import { useCallback, useRef } from 'react';

const useDebounce = <T>(callback: (...args: T[]) => void, time: number) => {
  const timer = useRef<NodeJS.Timeout>();

  return useCallback(
    (...args: T[]) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => {
        callback(...args);
      }, time);
    },
    [timer],
  );
};
export default useDebounce;
