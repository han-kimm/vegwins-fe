import Image from 'next/image';
import { ReactNode } from 'react';
import ApiErrorBoundary from '@/components/errorHandling/ApiErrorBoundary';

interface Props {
  setTab: (tab: string) => void;
  children: ReactNode;
}

const MyInfo = ({ setTab, children }: Props) => {
  return (
    <div className="animate-fadeIn">
      <button
        onClick={() => setTab('')}
        className="transform-active flex items-center gap-8 rounded-full bg-black-100 px-12 py-4 text-16 font-medium text-white"
      >
        <Image width={10} height={24} src="/icon/arrow-left-s.svg" alt="뒤로가기" aria-hidden />
        뒤로 가기
      </button>
      <div className="mb-60 mt-20 flex flex-col gap-12">
        <ApiErrorBoundary>{children}</ApiErrorBoundary>
      </div>
    </div>
  );
};
export default MyInfo;
