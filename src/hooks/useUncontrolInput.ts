import { useEffect, useRef } from 'react';

interface Props {
  syncState: any;
}

const useUncontrolInput = <T extends HTMLInputElement | HTMLTextAreaElement>({ syncState }: Props) => {
  const ref = useRef<T>();

  const refCallback = (el: T) => {
    if (el) {
      ref.current = el;
    }
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.value = syncState;
    }
  }, [syncState, ref]);

  return { ref, refCallback };
};
export default useUncontrolInput;
