'use client';

import useDebounce from '@/hooks/useDebounce';
import { memo, useCallback, useEffect, useState } from 'react';
import IconArrowUp from 'public/icon/arrow-up.svg';

const LiftingButton = memo(function LiftingButton() {
  const [isScroll, setIsScroll] = useState(false);

  const handleScroll = useDebounce((e) => {
    const { scrollY } = window;
    scrollY > 200 ? setIsScroll(true) : setIsScroll(false);
  }, 500);

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const liftScroll = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return isScroll ? (
    <button
      onClick={liftScroll}
      className="transform-active fixed bottom-12 right-12 animate-fadeIn rounded-full bg-black-80 p-12 text-white shadow-lg"
    >
      <IconArrowUp />
    </button>
  ) : null;
});
export default LiftingButton;
