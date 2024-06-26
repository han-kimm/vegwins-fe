import { Dispatch, SetStateAction } from 'react';

export const DEFAULT_IMAGE = '/image/default.webp';
export const MAX_LEGNTH_IMAGE = 2;

export const INPUT_PLACEHODER = "'검색어' 또는 '#특징'";
export const LABEL = {
  imageUrl: '',
  title: '문서명',
  category: '카테고리',
  hashtag: '해시태그',
  description: '설명',
};

export const LABEL_KEY = Object.keys(LABEL) as (keyof typeof LABEL)[];

export const SP_KEYWORD = 'k';
export const SP_CATEGORY = 'c';

export const PREVIOUS_PATH = 'pp';
export const WRITE_SAVE = 'wr';

export const DEFAULT_SUBMIT = { image: [], title: '', hashtag: Array<string>(), category: Array<string>(), description: '' };
export type SubmitData = {
  image: (Blob | string)[];
  title: string;
  hashtag: string[];
  category: string[];
  description: string;
};
export type SetSubmitData = Dispatch<SetStateAction<SubmitData>>;

export interface SubmitInitial extends Omit<SubmitData, 'image'> {
  image: string[];
}

export const RATING_MSG: { [key: number]: string } = {
  [-1]: '없음',
  [0]: '안 좋음',
  [1]: '보통',
  [2]: '좋음',
};
