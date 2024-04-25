'use client';

import { TABS, TABS_KEY } from '@/constants/dashboard';
import Image from 'next/image';
import { useState } from 'react';
import Logout from '@/components/dashboard/Logout';

const DashboardMyInfo = () => {
  const [tab, setTab] = useState('');
  return (
    <div className="grid grid-cols-2 place-items-center gap-y-48">
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
    <button key={key} className="flex-center gap-8 text-18 font-bold" aria-label={key}>
      <Image width={36} height={36} src={TABS[key]} alt={key} aria-hidden />
      {key}
    </button>
  ));
};
