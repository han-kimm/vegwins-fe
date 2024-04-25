import dynamic from 'next/dynamic';
import Dashboard from '@/components/dashboard/Dashboard';
import DashboardBottomSheet from '@/components/home_header/DashboardBottomSheet';
import Notice from '@/components/home_header/Notice';

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
