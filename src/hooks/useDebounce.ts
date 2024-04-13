import { useRef } from 'react';

const useDebounce = <T>(callback: (...args: T[]) => void, time: number) => {
  const timer = useRef<NodeJS.Timeout>();

  return (...args: T[]) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      console.log('useDebounce', 'set');
      callback(...args);
    }, time);
  };
};
export default useDebounce;
