import Link from 'next/link';
import IconHome from 'public/icon/home.svg';

const HomeButton = () => {
  return (
    <Link href="/" className="rounded-full bg-white p-12 shadow-sm">
      <IconHome />
    </Link>
  );
};
export default HomeButton;
