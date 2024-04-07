import { getCookie } from '@/utils/cookie';
import Image from 'next/image';
import Link from 'next/link';

const ReturnButton = async () => {
  const prevPath = await getCookie('sp');
  return (
    <Link href={prevPath ?? '/search'} className="flex-center gap-12 text-16 font-medium">
      <Image width={12} height={20} src="/icon/arrow-left.svg" alt="" aria-hidden={true} />
      검색 결과로 돌아가기
    </Link>
  );
};
export default ReturnButton;
