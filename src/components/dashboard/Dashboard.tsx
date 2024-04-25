import { getCookie } from '@/utils/cookie';
import Board from '@/components/dashboard/Board';
import Logout from '@/components/dashboard/Logout';
import Nickname from '@/components/dashboard/Nickname';

const Dashboard = async () => {
  const session = await getCookie('v_s');
  if (!session) {
    return null;
  }
  return (
    <div className="flex flex-col">
      <Nickname />
      <Logout />
    </div>
  );
};
export default Dashboard;
