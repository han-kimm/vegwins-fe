'use client';

import { FocusEvent, ReactNode, useCallback, useEffect, useState } from 'react';
import IconDown from 'public/icon/arrow-down.svg';
import IconProfile from 'public/icon/profile.svg';

interface Props {
  children: ReactNode;
}
const DashboardBottomSheet = ({ children }: Props) => {
  const [open, setOpen] = useState(false);

  const toggleByButton = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const closeByBlur = useCallback((e: FocusEvent) => {
    console.log(1);
    if (!e.relatedTarget) {
      setOpen(false);
      return;
    }
  }, []);

  const closeByScroll = useCallback(() => {
    const { scrollY } = window;
    console.log(scrollY);
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

  return (
    <>
      <button onClick={toggleByButton} aria-label="내 정보 모아보기">
        <IconProfile />
      </button>
      {open && (
        <div
          id="bottomsheet"
          tabIndex={0}
          ref={(el) => {
            el?.focus();
          }}
          onBlurCapture={closeByBlur}
          onBlur={closeByBlur}
          className={`${open ? 'bottom-0' : '-bottom-300'} fixed left-0 z-20 flex h-max w-full max-w-[50rem] animate-slideDown flex-col rounded-t-md bg-white shadow-bt transition-all duration-300 max:mx-[calc(50%-25rem)]`}
        >
          <div className="flex justify-between px-16 pt-16">
            <div className="h-4 w-100 rounded-full bg-black-100" />
            <button onClick={toggleByButton} className="text-b" aria-label="내 정보 모음 접어두기">
              <IconDown />
            </button>
          </div>
          {children}
        </div>
      )}
    </>
  );
};
export default DashboardBottomSheet;
