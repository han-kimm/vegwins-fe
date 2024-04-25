import { getCookie } from '@/utils/cookie';
import DashboardMyInfo from '@/components/dashboard/DashboardMyInfo';
import DashboardNickname from '@/components/dashboard/DashboardNickname';

const Dashboard = async () => {
  const session = await getCookie('v_s');
  if (!session) {
    return null;
  }
  return (
    <div className="flex flex-col gap-20 overflow-hidden px-16">
      <DashboardNickname session={session} />
      <DashboardMyInfo />
    </div>
  );
};
export default Dashboard;
