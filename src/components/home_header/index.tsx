import { cookies } from 'next/headers';
import Link from 'next/link';
import LoginButton from '@/components/home_header/LoginButton';
import Notice from '@/components/home_header/Notice';
import IconProfile from 'public/icon/profile.svg';

const AuthChecker = () => {
  const session = JSON.parse(cookies().get('session')?.value ?? '{}');
  return session.isLogin ? (
    <div className="flex gap-60">
      <Notice />
      <Link href="/profile">
        <IconProfile />
      </Link>
    </div>
  ) : (
    <LoginButton />
  );
};
export default AuthChecker;
