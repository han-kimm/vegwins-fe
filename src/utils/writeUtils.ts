import { SubmitData } from '@/constants/default';
import { WRITE_SAVE } from '@/constants/localStorage';
import { setLocalStorage } from '@/utils/localStorage';

export const saveSubmitData = (submitData: SubmitData) => {
  setLocalStorage({ key: WRITE_SAVE, value: { ...submitData, hashtag: [...submitData.hashtag] } });
};

export const diffLocalStorage = (submitData: SubmitData) => {
  const previousData = typeof window !== 'undefined' && localStorage.getItem(WRITE_SAVE);
  if (!previousData) {
    return true;
  }
  const currentData = JSON.stringify({ ...submitData, hashtag: [...submitData.hashtag] });
  return currentData !== previousData;
};

export const required = (submitData: SubmitData) => {
  return !!submitData.title && !!submitData.category.length && !!submitData.description;
};

export const canSave = (submitData: SubmitData) => {
  const isDirty = !!submitData.image || !!submitData.title || !!submitData.category.length || !!submitData.hashtag.size || !!submitData.description;
  return isDirty && diffLocalStorage(submitData);
};

export const canRecall = (submitData: SubmitData) => {
  const previousData = typeof window !== 'undefined' && localStorage.getItem(WRITE_SAVE);
  const currentData = JSON.stringify({ ...submitData, hashtag: [...submitData.hashtag] });
  return !!previousData && currentData !== previousData;
};
