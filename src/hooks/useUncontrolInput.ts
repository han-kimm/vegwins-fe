import { useEffect, useRef } from 'react';

const useUncontrolInput = <T extends HTMLInputElement | HTMLTextAreaElement>(syncState?: any) => {
  const ref = useRef<T>();

  const refCallback = (el: T) => {
    if (el) {
      ref.current = el;
    }
  };

  useEffect(() => {
    if (ref.current && syncState) {
      ref.current.value = syncState;
    }
  }, [syncState, ref]);

  return { ref, refCallback };
};
export default useUncontrolInput;
