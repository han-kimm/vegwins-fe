import { useRef } from 'react';

const useThrottle = <T extends Function>(callback: T, time: number): T => {
  const timer = useRef<NodeJS.Timeout>();

  return ((...args: Parameters<any>) => {
    if (timer.current) {
      return;
    }

    callback(...args);

    timer.current = setTimeout(function () {
      clearTimeout(timer.current);
      timer.current = undefined;
    }, time);
  }) as unknown as T;
};
export default useThrottle;
