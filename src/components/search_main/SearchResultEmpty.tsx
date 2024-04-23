import { getCookie } from '@/utils/cookie';
import AuthButton from '@/components/common/AuthButton';
import LinkBase from '@/components/common/LinkBase';
import IconPencil from 'public/icon/pencil.svg';

const SearchResultEmpty = async () => {
  const session = await getCookie('v_s');
  return (
    <div className="flex flex-grow animate-fadeIn flex-col">
      <h2 className="flex-center w-full flex-grow text-24 font-bold">일치하는 문서가 없습니다.</h2>
      <div className="flex flex-col items-start gap-8 border-t border-solid border-black-100 p-20">
        <h3 className="text-18 font-bold">제안</h3>
        <p className="text-14 font-medium">검색 결과가 없다면, 새로운 문서를 생성해 주세요!</p>
        {session ? (
          <LinkBase
            href={session ? '/write' : ''}
            className={`${session ? '' : 'active:bg-orange active:font-bold active:text-black-100'} transform-active w-max text-14 text-white`}
          >
            <IconPencil />
            <span>문서 작성하기</span>
          </LinkBase>
        ) : (
          <AuthButton />
        )}
      </div>
    </div>
  );
};
export default SearchResultEmpty;
