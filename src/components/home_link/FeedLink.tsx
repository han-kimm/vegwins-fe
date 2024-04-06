import Image from 'next/image';
import Link from 'next/link';

const FeedLink = () => {
  return (
    <section className="flex w-full px-40" aria-label="게시판으로 이동">
      <Link href="/community" className="relative flex-grow rounded-sm bg-white px-28 py-28 shadow-md">
        <p className="mb-28 text-start text-20 font-bold">함께 이야기하기</p>
        <Image width={32} height={32} src="/icon/join.svg" alt="입장 이미지" aria-hidden={true} />
        <div className="absolute right-1/4 top-1/2 h-72 w-96 -translate-y-1/2 translate-x-1/2">
          <Image fill src="/image/chat.webp" sizes="100px" priority alt="대화 이미지" aria-hidden={true} />
        </div>
      </Link>
    </section>
  );
};
export default FeedLink;
