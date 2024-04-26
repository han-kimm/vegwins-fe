'use client';

import { Session } from '@/types/session';
import { useState } from 'react';
import Logout from '@/components/dashboard/Logout';
import MyInfo from '@/components/dashboard/MyInfo';
import MyInfoTabList from '@/components/dashboard/MyInfoTabList';
import MyInfoTitle from '@/components/dashboard/MyInfoTitle';

interface Props {
  session: Session;
}

const DashboardMyInfo = ({ session }: Props) => {
  const [tab, setTab] = useState('');
  return (
    <>
      <MyInfoTitle session={session} tab={tab} />
      {tab ? (
        <MyInfo session={session} tab={tab} setTab={setTab} />
      ) : (
        <div className="mb-20 grid grid-cols-2 place-items-center gap-y-28 text-16 font-bold">
          <MyInfoTabList setTab={setTab} />
          <Logout />
        </div>
      )}
    </>
  );
};
export default DashboardMyInfo;
