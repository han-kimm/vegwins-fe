'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';

const Board = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(true);
  const [spread, setSpread] = useState(false);
  const timer = useRef<NodeJS.Timeout>();

  useEffect(() => {
    timer.current = setTimeout(() => setOpen(false), 3000);
    return () => clearTimeout(timer.current);
  }, []);

  const handleFocus = () => {
    clearTimeout(timer.current);
  };
  return (
    <div
      onFocus={handleFocus}
      onBlur={() => setOpen(false)}
      className={`${open ? (spread ? 'bottom-0' : '-bottom-100') : '-bottom-300'} fixed flex h-300 w-full max-w-[50rem] animate-slideDown flex-col rounded-t-sm bg-white shadow-lg transition-all max:mx-[calc(50%-25rem)]`}
    >
      <button onClick={() => setSpread(!spread)}>정보 더 보기</button>
      {children}
    </div>
  );
};
export default Board;
