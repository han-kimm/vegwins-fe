import { getCookie } from '@/utils/cookie';
import Link from 'next/link';
import LoginButton from '@/components/home_header/LoginButton';
import Notice from '@/components/home_header/Notice';
import IconProfile from 'public/icon/profile.svg';

const AuthChecker = async () => {
  const session = await getCookie('session');
  return session ? (
    <>
      <Notice />
      <Link href="/profile" className="ml-60">
        <IconProfile />
      </Link>
    </>
  ) : (
    <LoginButton />
  );
};
export default AuthChecker;
