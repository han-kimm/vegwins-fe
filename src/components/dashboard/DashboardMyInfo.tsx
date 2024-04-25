'use client';

import { TABS, TABS_KEY } from '@/constants/dashboard';
import Image from 'next/image';
import { useState } from 'react';
import Logout from '@/components/dashboard/Logout';
import MyInfo from '@/components/dashboard/MyInfo';
import MyInfoTabList from '@/components/dashboard/MyInfoTabList';

const DashboardMyInfo = () => {
  const [tab, setTab] = useState('');
  return tab ? (
    <MyInfo tab={tab} setTab={setTab} />
  ) : (
    <div className="mb-20 grid grid-cols-2 place-items-center gap-y-28 text-16 font-bold">
      <MyInfoTabList setTab={setTab} />
      <Logout />
    </div>
  );
};
export default DashboardMyInfo;
