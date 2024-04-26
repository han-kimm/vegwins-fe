import { MouseEvent, ReactNode } from 'react';
import IconDown from 'public/icon/arrow-down.svg';

interface Props {
  open: boolean;
  toggleByClick: () => void;
  children: ReactNode;
}

const BottomSheet = ({ open, toggleByClick, children }: Props) => (
  <div
    onClick={toggleByClick}
    className={`${open ? 'bottom-0' : '-bottom-300'} fixed left-0 z-20 flex h-dvh w-full max-w-[50rem] animate-slideDown flex-col justify-end max:mx-[calc(50%-25rem)]`}
  >
    <div onClick={(e: MouseEvent) => e.stopPropagation()} className="rounded-t-md bg-white shadow-bt transition-all duration-300">
      <div className="flex justify-between px-16 pt-16">
        <div className="h- w-100 rounded-full bg-black-100" />
        <button onClick={toggleByClick} className="text-b" aria-label="접어두기">
          <IconDown />
        </button>
      </div>
      {children}
    </div>
  </div>
);

export default BottomSheet;
