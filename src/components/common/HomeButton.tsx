import Link from 'next/link';
import IconHome from 'public/icon/home.svg';

interface Props {
  isDoc?: boolean;
}

const HomeButton = ({ isDoc }: Props) => {
  return (
    <Link href="/" className={isDoc ? 'flex gap-12 text-16 font-medium' : 'rounded-full bg-white p-12 shadow-sm'}>
      {isDoc && '홈페이지'}
      <IconHome />
    </Link>
  );
};
export default HomeButton;
