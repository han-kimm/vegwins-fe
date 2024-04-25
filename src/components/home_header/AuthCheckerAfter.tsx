import dynamic from 'next/dynamic';
import Notice from '@/components/home_header/Notice';
import Profile from '@/components/home_header/Profile';

const Dashboard = dynamic(() => import('../dashboard/Dashboard'));

const AuthAfter = () => {
  return (
    <>
      <Notice />
      <Profile>
        <Dashboard />
      </Profile>
    </>
  );
};
export default AuthAfter;
