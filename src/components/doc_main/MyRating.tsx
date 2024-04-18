'use client';

import { RATING_MSG } from '@/constants/default';
import { MockDoc } from '@/constants/mockDoc';
import { getLocalStorage } from '@/utils/localStorage';
import { useEffect, useState } from 'react';
import MyRatingSelector from '@/components/doc_main/MyRatingSelector';

interface Props {
  data: MockDoc;
  paperId: string;
}

const MyRating = ({ data, paperId }: Props) => {
  const [rating, setRating] = useState(-1);
  // Data Fetching...

  useEffect(() => {
    setRating(getLocalStorage(`r${paperId}`) ?? -1);
  }, []);

  return (
    <section className="flex-center relative grow flex-col rounded-md bg-white p-20 shadow-lg" aria-label="문서 평가">
      <div className="mb-28 flex w-full gap-12">
        <p className="shrink-0 text-18 font-bold">나의 평가</p>
        <div className="h-full w-1 border-l border-black-60 " />
        <p className="grow text-center text-18 font-bold">{RATING_MSG[rating]}</p>
      </div>
      <MyRatingSelector rating={rating} setRating={setRating} />
      {rating > -1 && <span className="absolute bottom-4">{data.rating[rating as 0 | 1 | 2]}명이 같은 의견이에요!</span>}
    </section>
  );
};
export default MyRating;
