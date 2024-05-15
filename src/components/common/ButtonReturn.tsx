'use client';

import { PREVIOUS_PATH } from '@/constants/default';
import { getSessionStorage } from '@/utils/browserStorage';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface Props {
  recallPath?: boolean;
  text?: string;
  icon?: string;
  reverse?: boolean;
}
const ButtonReturn = ({ recallPath = false, text, icon, reverse }: Props) => {
  const router = useRouter();
  const handleClick = () => {
    if (!recallPath) {
      router.back();
      return;
    }

    const previousPath = getSessionStorage(PREVIOUS_PATH);
    if (previousPath) {
      router.push(previousPath);
      return;
    }

    router.push('/search');
  };

  return (
    <button onClick={handleClick} className={`${reverse && 'flex-row-reverse'} flex-center gap-12 text-16 font-medium`} aria-label={text}>
      <div className="relative mt-4 h-24 w-12">
        <Image fill src={`/icon/${icon}.svg`} alt="" aria-hidden={true} />
      </div>
      {text}
    </button>
  );
};
export default ButtonReturn;
