import { getCookie } from '@/utils/cookie';
import DashboardMyInfo from '@/components/dashboard/DashboardMyInfo';

const Dashboard = async () => {
  const session = await getCookie('v_s');
  if (!session) {
    return null;
  }
  return (
    <div className="flex flex-col gap-20 overflow-hidden px-16 pt-16">
      <DashboardMyInfo session={session} />
    </div>
  );
};
export default Dashboard;
