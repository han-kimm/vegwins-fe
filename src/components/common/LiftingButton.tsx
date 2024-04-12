'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import IconArrowUp from 'public/icon/arrow-up.svg';

const LiftingButton = () => {
  const [isScroll, setIsScroll] = useState(false);
  const throttle = useRef(false);
  const debounce = useRef<NodeJS.Timeout>();

  const handleScroll = useCallback(() => {
    if (throttle.current) {
      return;
    }
    console.log(3);
    const { scrollY } = window;
    scrollY > 200 ? setIsScroll(true) : setIsScroll(false);
    throttle.current = true;
    setTimeout(() => (throttle.current = false), 500);

    if (debounce.current) {
      clearTimeout(debounce.current);
    }
    debounce.current = setTimeout(() => {
      const { scrollY } = window;
      scrollY > 200 ? setIsScroll(true) : setIsScroll(false);
    }, 500);
  }, [throttle]);

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
    <button onClick={liftScroll} className="fixed bottom-12 right-12 animate-fadeIn rounded-full bg-black-80 p-12 text-white shadow-lg">
      <IconArrowUp />
    </button>
  ) : null;
};
export default LiftingButton;
