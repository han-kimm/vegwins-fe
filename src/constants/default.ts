import { WRITE_SAVE } from '@/constants/localStorage';
import { Dispatch, SetStateAction } from 'react';

export const DEFAULT_IMAGE = '/image/default.webp';
export const INPUT_PLACEHODER = "'검색어' 또는 '#특징'";
export const LABEL: { [key: string]: string } = {
  imageUrl: '',
  title: '문서명',
  category: '카테고리',
  hashtag: '해시태그',
  description: '설명',
};

export const SP_KEYWORD = 'k';
export const SP_CATEGORY = 'c';

export class DefaultSubmit {
  image = '';
  title = '';
  hashtag = new Set<string>();
  category = Array<string>();
  description = '';
  diffLocalStorage() {
    const currentData = JSON.stringify(this);
    const previousData = localStorage.getItem(WRITE_SAVE);
    return currentData === previousData;
  }
  required() {
    return !!this.title && !!this.category.length && !!this.description;
  }
  canSave() {
    return this.diffLocalStorage() || !!this.image || !!this.title || !!this.category.length || !!this.hashtag.size || !!this.description;
  }
}
export const DEFAULT_SUBMIT = { image: '', title: '', hashtag: new Set<string>(), category: Array<string>(), description: '' };

export type SetSubmitData = Dispatch<SetStateAction<typeof DEFAULT_SUBMIT>>;
