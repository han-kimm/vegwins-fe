'use client';

import { ReactNode, useState } from 'react';
import BottomSheet from '@/components/common/BottomSheet';
import IconProfile from 'public/icon/profile.svg';

interface Props {
  children: ReactNode;
}

const Board = ({ children }: Props) => {
  const [open, setOpen] = useState(false);
  const toggleByClick = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <button onClick={toggleByClick} aria-label="내 정보 모아보기">
        <IconProfile />
      </button>
      {open && <BottomSheet toggleByClick={toggleByClick}>{children}</BottomSheet>}
    </>
  );
};
export default Board;
