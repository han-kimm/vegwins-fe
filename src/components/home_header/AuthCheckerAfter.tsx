import Link from 'next/link';
import Notice from '@/components/home_header/Notice';
import IconProfile from 'public/icon/profile.svg';

const AuthAfter = () => {
  return (
    <>
      <Notice />
      <Link href="/dashboard" scroll={false} aria-label="내 정보 모아보기">
        <IconProfile />
      </Link>
    </>
  );
};
export default AuthAfter;
