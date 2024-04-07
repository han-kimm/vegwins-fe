import { getCookie } from '@/utils/cookie';
import Link from 'next/link';
import AuthButton from '@/components/home_header/AuthButton';
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
    <AuthButton />
  );
};
export default AuthChecker;
