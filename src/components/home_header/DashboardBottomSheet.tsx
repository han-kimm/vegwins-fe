'use client';

import { ReactNode, useState } from 'react';
import IconProfile from 'public/icon/profile.svg';

interface Props {
  children: ReactNode;
}
const DashboardBottomSheet = ({ children }: Props) => {
  const [open, setOpen] = useState(true);
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
        className={`${open ? 'bottom-0' : '-bottom-300'} fixed left-0 flex h-max w-full max-w-[50rem] animate-slideDown flex-col rounded-t-lg bg-white shadow-lg transition-all  max:mx-[calc(50%-25rem)]`}
      >
        <button className="flex-center h-32 shrink-0 flex-col">
          <div className="h-4 w-100 rounded-full bg-black-100" />
        </button>
        {children}
      </div>
    </>
  );
};
export default DashboardBottomSheet;
