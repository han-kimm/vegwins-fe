'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface Props {
  href: string;
  text?: string;
  icon?: string;
  reverse?: boolean;
}
const LinkReturn = ({ href, text, icon, reverse }: Props) => {
  const router = useRouter();
  console.log(process.env.NEXT_PUBLIC_BASE_URL?.slice(0, -4));
  console.log(document.referrer);
  const handleClick = () => {
    router.back();
    // document.referrer.includes(`${process.env.NEXT_PUBLIC_BASE_URL?.slice(0, -4)}/search`) ? router.back() : router.push(href);
  };
  return (
    <button onClick={handleClick} className={`${reverse && 'flex-row-reverse'} flex-center gap-12 text-16 font-medium`}>
      <div className="relative mt-4 h-24 w-12">
        <Image fill src={`/icon/${icon}.svg`} alt="" aria-hidden={true} />
      </div>
      {text}
    </button>
  );
};
export default LinkReturn;
