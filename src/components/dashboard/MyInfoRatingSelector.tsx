'use client';

import { Rating } from '@/types/data';
import { useState } from 'react';
import MyRatingSelector from '@/components/paper_main/MyRatingSelector';

interface Props {
  paperId: string;
  rating: Rating;
}

const MyInfoRatingSelector = ({ paperId, rating: initial }: Props) => {
  const [rating, setRating] = useState(initial);
  return <MyRatingSelector paperId={paperId} rating={rating} setRating={setRating} />;
};
export default MyInfoRatingSelector;
