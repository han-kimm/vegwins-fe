import { SubmitData, WRITE_SAVE } from '@/constants/default';
import { getLocalStorage, setLocalStorage } from '@/utils/browserStorage';

export const saveSubmitData = (submitData: SubmitData) => {
  setLocalStorage({ key: WRITE_SAVE, value: { ...submitData, hashtag: [...submitData.hashtag] } });
};

const getEntireData = (submitData: SubmitData) => {
  const previousData = typeof window !== 'undefined' ? JSON.stringify(getLocalStorage(WRITE_SAVE)) : 'null';
  const currentData = JSON.stringify({ ...submitData, hashtag: [...submitData.hashtag] });
  return { previousData, currentData };
};

export const diffLocalStorage = (submitData: SubmitData) => {
  const { previousData, currentData } = getEntireData(submitData);
  if (previousData === 'null') {
    return true;
  }
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
  const { previousData, currentData } = getEntireData(submitData);
  return previousData !== 'null' && currentData !== previousData;
};
