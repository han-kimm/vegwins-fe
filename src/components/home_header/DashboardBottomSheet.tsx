'use client';

import useBottomSheet from '@/hooks/useBottomSheet';
import { ReactNode } from 'react';
import IconProfile from 'public/icon/profile.svg';

interface Props {
  children: ReactNode;
}
const DashboardBottomSheet = ({ children }: Props) => {
  const { toggleByClick, BottomSheet } = useBottomSheet();

  return (
    <>
      <button onClick={toggleByClick} aria-label="내 정보 모아보기">
        <IconProfile />
      </button>
      <BottomSheet>{children}</BottomSheet>
    </>
  );
};
export default DashboardBottomSheet;
