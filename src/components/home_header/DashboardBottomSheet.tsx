'use client';

import { ReactNode, useState } from 'react';
import IconProfile from 'public/icon/profile.svg';

interface Props {
  children: ReactNode;
}
const DashboardBottomSheet = ({ children }: Props) => {
  const [open, setOpen] = useState(false);
  const [focus, setFocus] = useState(false);

  const buttonClick = () => {
    if (focus) {
      setOpen(false);
      setFocus(false);
      return;
    }
    setOpen((prev) => !prev);
  };

  const buttonBlur = () => {
    setOpen(false);
  };

  const sheetFocus = () => {
    setOpen(true);
    setFocus(true);
  };

  return (
    <>
      <button onClick={buttonClick} onBlur={buttonBlur} aria-label="내 정보 모아보기">
        <IconProfile />
      </button>
      <div
        id="bottomsheet"
        onFocus={sheetFocus}
        className={`${open ? 'bottom-0' : '-bottom-300'} fixed left-0 z-20 flex h-max w-full max-w-[50rem] animate-slideDown flex-col rounded-t-md bg-white shadow-bt transition-all duration-300 max:mx-[calc(50%-25rem)]`}
      >
        {children}
      </div>
    </>
  );
};
export default DashboardBottomSheet;
