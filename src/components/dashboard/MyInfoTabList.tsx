import { TABS, TABS_KEY } from '@/constants/dashboard';
import Image from 'next/image';

interface Props {
  setTab: (tab: string) => void;
}

const MyInfoTabList = ({ setTab }: Props) => {
  return TABS_KEY.map((key) => (
    <button key={key} onClick={() => setTab(key)} className="flex-center h-52 gap-8 rounded-sm" aria-label={key}>
      <Image width={36} height={36} src={TABS[key]} alt={key} aria-hidden />
      {key}
    </button>
  ));
};
export default MyInfoTabList;
