'use client';

import { DEFAULT_IMAGE } from '@/constants/default';
import Image from 'next/image';
import { useState } from 'react';

interface Props {
  value: string | string[];
}

const InformationImage = ({ value }: Props) => {
  const [selected, setSelected] = useState(0);
  if (typeof value === 'string') {
    return (
      <Image
        width={300}
        height={300}
        priority
        sizes="600px"
        src={value || DEFAULT_IMAGE}
        alt=""
        className="mx-auto rounded-md object-cover"
        aria-hidden={true}
      />
    );
  }
  return (
    <div className="flex-center w-full flex-col gap-12">
      <Image
        width={300}
        height={300}
        priority
        sizes="600px"
        src={value[selected] || DEFAULT_IMAGE}
        alt={`${selected + 1}번째 본문 이미지`}
        className="rounded-md object-cover"
        aria-hidden={true}
      />
      <div className="flex-center w-full gap-20">
        {value.map((_, index) => (
          <button
            key={index}
            onClick={() => setSelected(index)}
            className={`h-8 rounded-full transition-all ${index === selected ? 'basis-100 bg-black-80' : 'basis-32 bg-black-40'}`}
            aria-current={index === selected}
            aria-label={`${index}번째 이미지 바로가기`}
          />
        ))}
      </div>
    </div>
  );
};
export default InformationImage;
