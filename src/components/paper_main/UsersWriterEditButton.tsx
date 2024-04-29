'use client';

import useFetchedState from '@/hooks/useFetchedState';
import { useRouter } from 'next/navigation';

interface Props {
  paperId: string;
}

const UsersWriterEditButton = ({ paperId }: Props) => {
  const { state: isWriter } = useFetchedState({ init: false, path: `/paper/${paperId}/writer` });

  const router = useRouter();
  const handleClick = () => {
    router.push(`/paper/${paperId}/edit`);
  };
  return (
    <button
      onClick={handleClick}
      disabled={!isWriter}
      className={`${isWriter ? 'transform-active bg-black-80 text-white transition-all' : 'border-black-60 bg-white text-black-80'} flex-center gap-8 rounded-xs border px-12 py-4 text-14`}
    >
      편집하기
    </button>
  );
};
export default UsersWriterEditButton;
