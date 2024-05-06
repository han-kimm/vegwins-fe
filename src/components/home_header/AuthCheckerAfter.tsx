import Dashboard from '@/components/dashboard/Dashboard';
import Board from '@/components/home_header/Board';
import Notice from '@/components/home_header/Notice';

const AuthAfter = () => {
  return (
    <>
      <Notice />
      <Board>
        <Dashboard />
      </Board>
    </>
  );
};
export default AuthAfter;
