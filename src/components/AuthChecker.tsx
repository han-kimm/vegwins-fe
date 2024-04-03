import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import LoginButton from '@/components/LoginButton';
import Notice from '@/components/Notice';
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
