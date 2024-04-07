import Link from 'next/link';
import Notice from '@/components/home_header/Notice';
import IconProfile from 'public/icon/profile.svg';

const AuthAfter = () => {
  return (
    <>
      <Notice />
      <Link href="/profile" className="ml-60">
        <IconProfile />
      </Link>
    </>
  );
};
export default AuthAfter;
