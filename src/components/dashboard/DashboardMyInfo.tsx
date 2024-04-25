'use client';

import { TABS, TABS_KEY } from '@/constants/dashboard';
import Image from 'next/image';
import { useState } from 'react';
import Logout from '@/components/dashboard/Logout';
import MyInfo from '@/components/dashboard/MyInfo';

const DashboardMyInfo = () => {
  const [tab, setTab] = useState('');
  return tab ? (
    <MyInfo tab={tab} setTab={setTab} />
  ) : (
    <div className="mb-20 grid grid-cols-2 place-items-center gap-y-28 text-16 font-bold">
      <TabList setTab={setTab} />
      <Logout />
    </div>
  );
};
export default DashboardMyInfo;

interface Props {
  setTab: (tab: string) => void;
}

const TabList = ({ setTab }: Props) => {
  return TABS_KEY.map((key) => (
    <button key={key} onClick={() => setTab(key)} className="flex-center h-52 gap-8 rounded-sm" aria-label={key}>
      <Image width={36} height={36} src={TABS[key]} alt={key} aria-hidden />
      {key}
    </button>
  ));
};
