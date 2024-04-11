'use client';

import useSetSearch from '@/hooks/useSavePath';
import Image from 'next/image';
import Link from 'next/link';

const LinkWrite = () => {
  const { savePath } = useSetSearch();
  return (
    <section className="flex w-full gap-12 px-40" aria-label="게시판 또는 문서작성으로 이동">
      <Link href="/write" onClick={() => savePath} className="transform-active grow rounded-sm bg-white px-20 py-28 shadow-md">
        <p className="mb-28 text-start text-18 font-bold">문서 작성</p>
        <Image width={32} height={32} src="/icon/pencil.svg" alt="작성 이미지" aria-hidden={true} />
      </Link>
    </section>
  );
};
export default LinkWrite;

const LinkCommnunity = () => {
  return (
    <Link href="/community" className="grow rounded-sm bg-white px-20 py-28 shadow-md">
      <p className="mb-28 text-start text-18 font-bold">게시판</p>
      <Image width={32} height={32} src="/icon/chat.svg" alt="게시판 이미지" aria-hidden={true} />
    </Link>
  );
};
