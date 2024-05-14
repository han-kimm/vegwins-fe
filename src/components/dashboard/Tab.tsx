'use client';

import { ReactNode, useContext } from 'react';
import { TabContext } from '@/components/dashboard/DashboardMyInfo';

const Tab = ({ condition, children }: { condition: string; children: ReactNode }) => {
  const tab = useContext(TabContext);

  return tab === condition && children;
};
export default Tab;
