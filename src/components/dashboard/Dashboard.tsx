import { getCookie } from '@/utils/cookie';
import DashboardMyInfo from '@/components/dashboard/DashboardMyInfo';
import Nickname from '@/components/dashboard/Nickname';

const Dashboard = async () => {
  const session = await getCookie('v_s');
  if (!session) {
    return null;
  }
  return (
    <div className="flex flex-col gap-20 overflow-hidden px-16">
      <Nickname session={session} />
      <DashboardMyInfo />
    </div>
  );
};
export default Dashboard;
