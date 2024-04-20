import Image from 'next/image';
import BaseLink from '@/components/common/BaseLink';
import IconPencil from 'public/icon/pencil.svg';

const SearchResultEmpty = () => {
  return (
    <div className="flex flex-grow animate-fadeIn flex-col">
      <h2 className="flex-center w-full flex-grow text-24 font-bold">일치하는 문서가 없습니다.</h2>
      <div className="border-t border-solid border-black-100 p-20">
        <h3 className="mb-4 text-18 font-bold">제안</h3>
        <p className="mb-4 text-14 font-medium">검색 결과가 없다면, 새로운 문서를 생성해 주세요!</p>
        <BaseLink href="/write" className="w-max text-14 text-white">
          <IconPencil />
          <span>문서 작성하기</span>
        </BaseLink>
      </div>
    </div>
  );
};
export default SearchResultEmpty;
