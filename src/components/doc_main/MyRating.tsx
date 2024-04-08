'use client';

import { ALTMSG } from '@/constants/ratingAlt';
import { getSessionStorage } from '@/utils/sessionStorage';
import { useState } from 'react';
import MyRatingSelector from '@/components/doc_main/MyRatingSelector';

interface Props {
  docId: string;
}

const MyRating = ({ docId }: Props) => {
  const [rating, setRating] = useState(() => getSessionStorage(`r${docId}`) ?? -1);
  // Data Fetching...
  return (
    <div className="flex-center relative grow flex-col rounded-md bg-white p-20 shadow-lg">
      <div className="mb-28 flex w-full gap-12">
        <p className="shrink-0 text-18 font-bold">나의 평가</p>
        <div className="h-full w-1 border-l border-black-60 " />
        <p className="grow text-center text-18 font-bold">{ALTMSG[rating]}</p>
      </div>
      <MyRatingSelector rating={rating} setRating={setRating} />
      {rating > -1 && <span className="absolute bottom-4">13명과 같은 의견이에요!</span>}
    </div>
  );
};
export default MyRating;
