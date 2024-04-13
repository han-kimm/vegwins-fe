import { useEffect, useRef } from 'react';

interface Props {
  syncState: any;
}

const useUncontrolInput = <T extends HTMLInputElement | HTMLTextAreaElement>({ syncState }: Props) => {
  const ref = useRef<T>(null);
  const input = ref.current;

  useEffect(() => {
    if (input) {
      input.value = syncState;
    }
  }, [syncState]);

  return ref;
};
export default useUncontrolInput;
