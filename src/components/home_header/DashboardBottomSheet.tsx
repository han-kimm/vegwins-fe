'use client';

import { ReactNode, useState } from 'react';
import IconProfile from 'public/icon/profile.svg';

interface Props {
  children: ReactNode;
}
const DashboardBottomSheet = ({ children }: Props) => {
  const [open, setOpen] = useState(false);

  const closeByBlur = () => {
    setOpen(false);
  };

  const openByButton = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <button onClick={openByButton} aria-label="내 정보 모아보기">
        <IconProfile />
      </button>
      {open && (
        <div
          id="bottomsheet"
          tabIndex={0}
          ref={(el) => {
            el?.focus();
          }}
          onBlur={closeByBlur}
          className={`${open ? 'bottom-0' : '-bottom-300'} fixed left-0 z-20 flex h-max w-full max-w-[50rem] animate-slideDown flex-col rounded-t-md bg-white shadow-bt transition-all duration-300 max:mx-[calc(50%-25rem)]`}
        >
          {children}
        </div>
      )}
    </>
  );
};
export default DashboardBottomSheet;
