'use client';

import { RATING_MSG } from '@/constants/default';
import useFetchedState from '@/hooks/useFetchedState';
import { Paper, Rating } from '@/types/data';
import { getLocalStorage } from '@/utils/browserStorage';
import { useEffect, useState } from 'react';
import MyRatingSelector from '@/components/paper_main/MyRatingSelector';

interface Props {
  initialRating?: Rating;
  paperRating?: Paper['rating'];
  paperId: string;
}

const MyRating = ({ initialRating, paperRating, paperId }: Props) => {
  const [rating, setRating] = useState(initialRating ?? (-1 as Rating));
  useEffect(() => {
    const unAuthUserRating = getLocalStorage(`r${paperId}`);
    if (unAuthUserRating) {
      setRating(unAuthUserRating);
    }
  }, []);

  return (
    <section className="flex-center relative grow flex-col rounded-md bg-white p-20 shadow-lg" aria-label="문서 평가">
      <div className="mb-28 flex w-full gap-12">
        <p className="shrink-0 text-18 font-bold">나의 평가</p>
        <div className="h-full w-1 border-l border-black-60 " />
        <p className="grow text-center text-18 font-bold">{RATING_MSG[rating]}</p>
      </div>
      <MyRatingSelector paperRating={paperRating} paperId={paperId} rating={rating} setRating={setRating} />
    </section>
  );
};
export default MyRating;
