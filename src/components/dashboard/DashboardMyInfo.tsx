'use client';

import { Session } from '@/types/session';
import { ReactNode, createContext, useState } from 'react';
import Logout from '@/components/dashboard/Logout';
import MyInfo from '@/components/dashboard/MyInfo';
import MyInfoTabList from '@/components/dashboard/MyInfoTabList';
import MyInfoTitle from '@/components/dashboard/MyInfoTitle';

interface Props {
  session: Session;
  children: ReactNode;
}

export const TabContext = createContext('');

const DashboardMyInfo = ({ session, children }: Props) => {
  const [tab, setTab] = useState('');

  return (
    <TabContext.Provider value={tab}>
      <MyInfoTitle session={session} tab={tab} />
      <If condition={!!tab}>
        <MyInfo setTab={setTab}>{children}</MyInfo>
      </If>
      <If condition={!tab}>
        <div className="mb-20 grid grid-cols-2 place-items-center gap-y-28 text-16 font-bold">
          <MyInfoTabList setTab={setTab} />
          <Logout />
        </div>
      </If>
    </TabContext.Provider>
  );
};
export default DashboardMyInfo;

const If = ({ condition, children }: { condition: boolean; children: ReactNode }) => {
  return condition && children;
};
