import Image from 'next/image';

const FeedLink = () => {
  return (
    <section className="flex w-full px-40" aria-label="게시판으로 이동">
      <button className="relative flex-grow rounded-sm bg-white px-28 py-28 shadow-sm">
        <p className="mb-28 text-start text-20 font-bold">함께 이야기하기</p>
        <Image width={32} height={32} src="/icon/join.svg" alt="입장 이미지" />
        <Image width={135} height={100} src="/image/chat.png" alt="대화 이미지" className="absolute right-1/4 top-1/2 -translate-y-1/2 translate-x-1/2" />
      </button>
    </section>
  );
};
export default FeedLink;
