'use client';

import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';
import BottomSheet from '@/components/common/BottomSheet';

interface Props {
  children: ReactNode;
}
const BottomSheetDashboard = ({ children }: Props) => {
  const router = useRouter();
  const toggleByClick = () => {
    router.push('/');
  };
  return <BottomSheet toggleByClick={toggleByClick}>{children}</BottomSheet>;
};
export default BottomSheetDashboard;
