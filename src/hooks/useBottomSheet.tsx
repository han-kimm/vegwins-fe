'use client';

import { useCallback, useEffect, useState } from 'react';

const useBottomSheet = () => {
  const [open, setOpen] = useState(false);

  const toggleByClick = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const closeByScroll = useCallback(() => {
    const { scrollY } = window;
    if (scrollY) {
      setOpen(false);
    }
  }, []);

  useEffect(() => {
    if (open) {
      window.addEventListener('scroll', closeByScroll);
    }
    return () => {
      window.removeEventListener('scroll', closeByScroll);
    };
  }, [open]);

  return { open, toggleByClick };
};
export default useBottomSheet;
