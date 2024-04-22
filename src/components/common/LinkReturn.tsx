'use client';

import { PREVIOUS_PATH } from '@/constants/default';
import { getSessionStorage } from '@/utils/browserStorage';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Props {
  href: string;
  text?: string;
  icon?: string;
  reverse?: boolean;
}
const LinkReturn = ({ href, text, icon, reverse }: Props) => {
  const [path, setPath] = useState(href);

  useEffect(() => {
    const previousPath = getSessionStorage(PREVIOUS_PATH);
    if (previousPath) {
      setPath(previousPath);
    }
  }, []);

  return (
    <Link href={path} className={`${reverse && 'flex-row-reverse'} flex-center gap-12 text-16 font-medium`} aria-label="홈페이지로 이동">
      <div className="relative mt-4 h-24 w-12">
        <Image fill src={`/icon/${icon}.svg`} alt="" aria-hidden={true} />
      </div>
      {text}
    </Link>
  );
};
export default LinkReturn;
