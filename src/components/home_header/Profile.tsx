import Link from 'next/link';
import IconProfile from 'public/icon/profile.svg';

const Profile = () => {
  return (
    <Link href="/" aria-label="내 정보 모아보기">
      <IconProfile />
    </Link>
  );
};
export default Profile;
