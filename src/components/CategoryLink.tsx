import Image from 'next/image';
import Link from 'next/link';

const CATEGORY = {
  편의점: '/icon/place-conv.svg',
  마트: '/icon/place-mart.svg',
  드럭스토어: '/icon/place-cosm.svg',
  빵집: '/icon/place-bake.svg',
  카페: '/icon/place-cafe.svg',
  패스트푸드: '/icon/place-inst.svg',
  술집: '/icon/place-alch.svg',
  '운동 후': '/icon/place-exer.svg',
  '인기 상품': '/icon/place-hot.svg',
};

const CATEGORY_KEY = Object.keys(CATEGORY) as Array<keyof typeof CATEGORY>;

const CategoryLink = () => {
  return (
    <section className="flex h-104 w-full scroll-mx-60 gap-20 overflow-scroll scroll-smooth" aria-label="카테고리에 따른 검색 페이지 이동">
      {CATEGORY_KEY.map((key) => (
        <Link href="/" key={key} className={`relative flex h-100 w-80 shrink-0 flex-col items-center gap-8 rounded-sm bg-white py-8 shadow first:ml-40 last:mr-40`}>
          <div className="relative h-48 w-48">
            <Image src={CATEGORY[key]} fill alt={`${key} 이미지`} />
          </div>
          <span className="text-16 font-bold">{key}</span>
        </Link>
      ))}
    </section>
  );
};
export default CategoryLink;
