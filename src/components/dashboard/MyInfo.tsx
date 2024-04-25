import Image from 'next/image';
import { Suspense } from 'react';
import Spinner from '@/components/common/Spinner';
import MyInfoChangeNickname from '@/components/dashboard/MyInfoChangeNickname';
import MyInfoPaper from '@/components/dashboard/MyInfoPaper';

const MyInfo = ({ tab, setTab }: { tab: string; setTab: (tab: string) => void }) => {
  let SwitchedComponent;
  switch (tab) {
    case '닉네임 변경':
      SwitchedComponent = <MyInfoChangeNickname />;
      break;
    case '나의 문서':
      SwitchedComponent = <MyInfoPaper />;
      break;
  }

  return (
    <div className="animate-slideRight">
      <button onClick={() => setTab('')} className="flex items-center gap-8 rounded-full bg-black-100 px-12 py-4 text-16 font-medium text-white ">
        <Image width={10} height={24} src="/icon/arrow-left-s.svg" alt="뒤로가기" aria-hidden />
        뒤로 가기
      </button>
      <div className="mb-60 mt-20 flex flex-col gap-12">
        <h3 className="text-20 font-bold">{tab}</h3>
        <Suspense
          fallback={
            <div className="flex-center h-300 w-full">
              <Spinner />
            </div>
          }
        >
          {SwitchedComponent}
        </Suspense>
      </div>
    </div>
  );
};
export default MyInfo;
