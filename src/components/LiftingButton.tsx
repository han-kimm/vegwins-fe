'use client';

import { useEffect, useState } from 'react';
import IconArrowUp from 'public/icon/arrow-up.svg';

const LiftingButton = () => {
  const [isScroll, setIsScroll] = useState(false);

  const handleScroll = () => {
    const { scrollY } = window;
    scrollY > 200 ? setIsScroll(true) : setIsScroll(false);
  };

  const liftScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isScroll ? (
    <button onClick={liftScroll} className="animate-fadeIn fixed bottom-12 right-12 rounded-full bg-black-80 p-12 text-white shadow-lg">
      <IconArrowUp />
    </button>
  ) : null;
};
export default LiftingButton;
