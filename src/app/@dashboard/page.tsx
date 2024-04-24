import { getCookie } from '@/utils/cookie';
import Logout from '@/components/dashboard/Logout';
import Nickname from '@/components/dashboard/Nickname';

const Dashboard = async () => {
  const session = await getCookie('v_s');
  if (!session) {
    return null;
  }
  return (
    <div className="fixed bottom-0 left-1/2 flex h-300 w-full max-w-[50rem] -translate-x-1/2 animate-slideDown flex-col rounded-t-sm bg-white shadow-lg">
      <Nickname />
      <Logout />
    </div>
  );
};
export default Dashboard;
