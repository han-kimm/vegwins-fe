'use client';

import { FunctionComponent, MouseEvent, ReactNode, useCallback, useState } from 'react';
import IconDown from 'public/icon/arrow-down.svg';

const useBottomSheet = () => {
  const [open, setOpen] = useState(false);

  const toggleByClick = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const BottomSheet: FunctionComponent<{ children: ReactNode }> = useCallback(
    ({ children }: { children: ReactNode }) =>
      open && (
        <div
          onClick={toggleByClick}
          onTouchEnd={toggleByClick}
          onScroll={() => console.log(1)}
          className={`${open ? 'bottom-0' : '-bottom-300'} fixed left-0 z-20 flex h-dvh w-full max-w-[50rem] animate-slideDown flex-col justify-end max:mx-[calc(50%-25rem)]`}
        >
          <div onClick={(e: MouseEvent) => e.stopPropagation()} className="rounded-t-md bg-white shadow-bt">
            <div className="flex justify-between px-16 pt-16">
              <div className="h-4 w-100 rounded-full bg-black-100" />
              <button onClick={toggleByClick} className="text-b" aria-label="접어두기">
                <IconDown />
              </button>
            </div>
            {children}
          </div>
        </div>
      ),
    [open, toggleByClick],
  );

  return { toggleByClick, BottomSheet };
};
export default useBottomSheet;
