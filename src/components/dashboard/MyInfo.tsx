import Image from 'next/image';
import { Suspense } from 'react';
import MyInfoChangeNickname from '@/components/dashboard/MyInfoChangeNickname';
import MyInfoComment from '@/components/dashboard/MyInfoComment';
import MyInfoPaper from '@/components/dashboard/MyInfoPaper';
import MyInfoRating from '@/components/dashboard/MyInfoRating';
import ApiErrorBoundary from '@/components/errorHandling/ApiErrorBoundary';
import Spinner from '@/components/errorHandling/Spinner';

interface Props {
  tab: string;
  setTab: (tab: string) => void;
}

const MyInfo = ({ tab, setTab }: Props) => {
  let SwitchedComponent;
  switch (tab) {
    case '닉네임 변경':
      SwitchedComponent = <MyInfoChangeNickname />;
      break;
    case '나의 문서':
      SwitchedComponent = <MyInfoPaper />;
      break;
    case '나의 댓글':
      SwitchedComponent = <MyInfoComment />;
      break;
    case '나의 평가':
      SwitchedComponent = <MyInfoRating />;
      break;
  }

  return (
    <div className="animate-fadeIn">
      <button onClick={() => setTab('')} className="flex items-center gap-8 rounded-full bg-black-100 px-12 py-4 text-16 font-medium text-white ">
        <Image width={10} height={24} src="/icon/arrow-left-s.svg" alt="뒤로가기" aria-hidden />
        뒤로 가기
      </button>
      <div className="mb-60 mt-20 flex flex-col gap-12">
        <ApiErrorBoundary>{SwitchedComponent}</ApiErrorBoundary>
      </div>
    </div>
  );
};
export default MyInfo;
