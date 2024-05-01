import { TABS_KEY } from '@/constants/dashboard';
import { getCookie } from '@/utils/cookie';
import DashboardMyInfo from '@/components/dashboard/DashboardMyInfo';
import MyInfoChangeNickname from '@/components/dashboard/MyInfoChangeNickname';
import MyInfoComment from '@/components/dashboard/MyInfoComment';
import MyInfoPaper from '@/components/dashboard/MyInfoPaper';
import MyInfoRating from '@/components/dashboard/MyInfoRating';
import Tab from '@/components/dashboard/Tab';

const Dashboard = async () => {
  const session = await getCookie('v_s');
  if (!session) {
    return null;
  }
  return (
    <div className="flex flex-col gap-20 overflow-hidden px-16">
      <DashboardMyInfo session={session}>
        <Tab condition={TABS_KEY[0]}>
          <MyInfoChangeNickname session={session} />
        </Tab>
        <Tab condition={TABS_KEY[1]}>
          <MyInfoPaper />
        </Tab>
        <Tab condition={TABS_KEY[2]}>
          <MyInfoComment session={session} />
        </Tab>
        <Tab condition={TABS_KEY[3]}>
          <MyInfoRating />
        </Tab>
      </DashboardMyInfo>
    </div>
  );
};
export default Dashboard;
