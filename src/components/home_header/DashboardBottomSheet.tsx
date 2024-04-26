'use client';

import useBottomSheet from '@/hooks/useBottomSheet';
import { MouseEvent, ReactNode } from 'react';
import IconDown from 'public/icon/arrow-down.svg';
import IconProfile from 'public/icon/profile.svg';

interface Props {
  children: ReactNode;
}
const DashboardBottomSheet = ({ children }: Props) => {
  const { open, toggleByClick } = useBottomSheet();

  return (
    <>
      <button onClick={toggleByClick} aria-label="내 정보 모아보기">
        <IconProfile />
      </button>
      {open && (
        <div
          onClick={toggleByClick}
          className={`${open ? 'bottom-0' : '-bottom-300'} fixed left-0 z-20 flex h-dvh w-full max-w-[50rem] animate-slideDown flex-col justify-end max:mx-[calc(50%-25rem)]`}
        >
          <div onClick={(e: MouseEvent) => e.stopPropagation()} className="rounded-t-md bg-white shadow-bt transition-all duration-300">
            <div className="flex justify-between px-16 pt-16">
              <div className="h-4 w-100 rounded-full bg-black-100" />
              <button onClick={toggleByClick} className="text-b" aria-label="접어두기">
                <IconDown />
              </button>
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
};
export default DashboardBottomSheet;
