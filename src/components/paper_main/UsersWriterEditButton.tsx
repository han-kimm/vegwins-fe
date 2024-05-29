import { getCookie } from '@/utils/cookie';
import { getSSR } from '@/utils/fetching';
import Link from 'next/link';

interface Props {
  paperId: string;
}

const UsersWriterEditButton = async ({ paperId }: Props) => {
  const session = await getCookie('v_s');
  let isWriter = false;
  if (session) {
    const res = await getSSR({ path: `/paper/${paperId}/writer` });
    if (!res?.error) {
      isWriter = res;
    }
  }
  return (
    <Link
      href={isWriter ? `/paper/${paperId}/edit` : ''}
      scroll={isWriter || false}
      className={
        isWriter ? 'transform-active flex-center gap-8 rounded-xs border bg-black-80 px-12 py-4 text-14 text-white transition-all' : 'hidden'
      }
    >
      편집하기
    </Link>
  );
};
export default UsersWriterEditButton;
