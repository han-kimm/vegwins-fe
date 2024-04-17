import { getCookie } from '@/utils/cookie';
import Image from 'next/image';
import Link from 'next/link';
import AuthSign from '@/components/common/AuthSign';

const LinkWrite = async () => {
  const session = await getCookie('v_s');
  return (
    <section className="flex w-full gap-12 px-40" aria-label="게시판 또는 문서작성으로 이동">
      <Link
        href={session ? '/write' : '/'}
        className="transform-active flex grow items-start justify-between rounded-sm bg-white px-20 py-28 shadow-md"
      >
        <div>
          <p className="mb-28 text-start text-18 font-bold">문서 작성</p>
          {session ? null : <AuthSign />}
        </div>
        <Image width={32} height={55} src="/icon/pencil.svg" alt="작성 이미지" aria-hidden={true} />
      </Link>
    </section>
  );
};
export default LinkWrite;

// const LinkCommnunity = () => {
//   return (
//     <Link href="/community" className="grow rounded-sm bg-white px-20 py-28 shadow-md">
//       <p className="mb-28 text-start text-18 font-bold">게시판</p>
//       <Image width={32} height={32} src="/icon/chat.svg" alt="게시판 이미지" aria-hidden={true} />
//     </Link>
//   );
// };
