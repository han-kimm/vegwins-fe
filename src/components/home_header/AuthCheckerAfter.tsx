import dynamic from 'next/dynamic';
import DashboardBottomSheet from '@/components/home_header/DashboardBottomSheet';
import Notice from '@/components/home_header/Notice';

const Dashboard = dynamic(() => import('@/components/dashboard/Dashboard'));

const AuthAfter = () => {
  return (
    <>
      <Notice />
      <DashboardBottomSheet>
        <Dashboard />
      </DashboardBottomSheet>
    </>
  );
};
export default AuthAfter;
