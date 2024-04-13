import { SubmitData } from '@/constants/default';
import { WRITE_SAVE } from '@/constants/localStorage';
import { getLocalStorage, setLocalStorage } from '@/utils/localStorage';

export const saveSubmitData = (submitData: SubmitData) => {
  setLocalStorage({ key: WRITE_SAVE, value: { ...submitData, hashtag: [...submitData.hashtag] } });
};

export const diffLocalStorage = (submitData: SubmitData) => {
  const previousData = getLocalStorage(WRITE_SAVE);
  const currentData = JSON.stringify({ ...submitData, hashtag: [...submitData.hashtag] });
  return currentData !== JSON.stringify(previousData);
};

export const required = (submitData: SubmitData) => {
  return !!submitData.title && !!submitData.category.length && !!submitData.description;
};

export const canSave = (submitData: SubmitData) => {
  const isDirty = !!submitData.image || !!submitData.title || !!submitData.category.length || !!submitData.hashtag.size || !!submitData.description;
  return isDirty && diffLocalStorage(submitData);
};
