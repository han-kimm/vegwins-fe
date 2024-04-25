import Image from 'next/image';
import MyInfoChangeNickname from '@/components/dashboard/MyInfoChangeNickname';

const MyInfo = ({ tab, setTab }: { tab: string; setTab: (tab: string) => void }) => {
  let SwitchedComponent;
  switch (tab) {
    case '닉네임 변경':
      SwitchedComponent = <MyInfoChangeNickname />;
      break;
  }

  return (
    <div>
      <button onClick={() => setTab('')} className="flex items-center gap-8 text-16 font-medium ">
        <Image width={10} height={24} src="/icon/arrow-left.svg" alt="뒤로가기" aria-hidden />
        뒤로 가기
      </button>
      {SwitchedComponent}
    </div>
  );
};
export default MyInfo;
