import { useRef } from 'react';

const useThrottle = <T>(callback: (...args: T[]) => void, time: number) => {
  const timer = useRef<NodeJS.Timeout>();

  return (...args: T[]) => {
    if (timer.current) {
      return;
    }

    callback(...args);

    timer.current = setTimeout(function () {
      clearTimeout(timer.current);
      timer.current = undefined;
    }, time);
  };
};
export default useThrottle;
