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
  const length = value.length;
  let start = 0;

  return (
    <div
      onDragStart={(e) => (start = e.movementX)}
      onDragEnd={(e) => setSelected((prev) => (e.movementX < start ? (prev + 1) % length : Math.abs(prev - 1) % length))}
      onTouchStart={(e) => (start = e.touches[0].pageX)}
      onTouchEnd={(e) => setSelected((prev) => (e.changedTouches[0].pageX < start ? (prev + 1) % length : Math.abs(prev - 1) % length))}
      className="flex-center w-full flex-col gap-12"
    >
      <Image
        width={300}
        height={300}
        priority
        sizes="600px"
        src={value[selected] || DEFAULT_IMAGE}
        alt={`${selected + 1}번째 본문 이미지`}
        className="h-300 rounded-md object-cover"
        aria-hidden={true}
      />
      <div className="flex-center w-full gap-20">
        {value.map((_, index) => (
          <button
            key={index}
            onClick={() => setSelected(index)}
            className={`h-8 rounded-full transition-all ${index === selected ? 'basis-160 bg-black-80' : 'basis-60 bg-black-40'}`}
            aria-current={index === selected}
            aria-label={`${index}번째 이미지 바로가기`}
          />
        ))}
      </div>
    </div>
  );
};
export default InformationImage;
