'use client';

import { MouseEvent, ReactNode, TouchEvent } from 'react';
import IconDown from 'public/icon/arrow-down.svg';

interface Props {
  toggleByClick: () => void;
  children: ReactNode;
}
const BottomSheet = ({ toggleByClick, children }: Props) => {
  return (
    <div
      onClick={toggleByClick}
      className={`absolute left-0 top-0 z-20 flex h-dvh w-full max-w-[50rem] animate-slideDown flex-col justify-end max:mx-[calc(50%-25rem)]`}
    >
      <div
        onClick={(e: MouseEvent) => e.stopPropagation()}
        onTouchEnd={(e: TouchEvent) => e.stopPropagation()}
        className="rounded-t-md bg-white shadow-bt"
      >
        <div className="flex justify-between px-16 pt-16">
          <div className="h-4 w-100 rounded-full bg-black-100" />
          <button onClick={toggleByClick} className="text-b" aria-label="접어두기">
            <IconDown />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};
export default BottomSheet;
