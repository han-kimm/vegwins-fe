import { getCookie } from '@/utils/cookie';
import ajax from '@/utils/fetching';
import Link from 'next/link';

interface Props {
  paperId: string;
}

const UsersWriterEditButton = async ({ paperId }: Props) => {
  const session = await getCookie('v_s');
  let isWriter = false;
  if (session) {
    isWriter = await ajax.get({ path: `/paper/${paperId}/writer` });
  }
  return (
    <Link
      href={isWriter ? `/paper/${paperId}/edit` : '#'}
      className={`${isWriter ? 'transform-active bg-black-80 text-white transition-all' : 'border-black-60 bg-white text-black-80'} flex-center gap-8 rounded-xs border px-12 py-4 text-14`}
    >
      편집하기
    </Link>
  );
};
export default UsersWriterEditButton;
