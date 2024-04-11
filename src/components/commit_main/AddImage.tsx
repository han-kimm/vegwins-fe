import Image from 'next/image';
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import IconPicture from 'public/icon/picture.svg';

interface Props {
  image: File | null;
  setImage: Dispatch<SetStateAction<File | null>>;
}

const AddImage = ({ image, setImage }: Props) => {
  const [thumbnail, setThumbnail] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newFile = e.target.files?.[0];
    if (!newFile) {
      return;
    }

    setImage(newFile);
    const newThumbnail = URL.createObjectURL(newFile);
    setThumbnail((prev) => (prev && URL.revokeObjectURL(prev), newThumbnail));
  };

  const resetThumbnail = () => {
    setImage(null);
    setThumbnail('');
  };

  return (
    <div className="flex w-full flex-col gap-8">
      <div className="flex items-baseline gap-8">
        <h2 className="text-18 font-medium">이미지</h2>
        <span>추가하지 않으면, 기본 이미지로 설정됩니다.</span>
      </div>
      <label
        htmlFor="image"
        className="flex-center transform-active relative block h-300 w-300 rounded-md border border-black-40 text-black-60 active:opacity-70"
        tabIndex={0}
      >
        {
          <Image
            fill
            priority
            src={thumbnail || '/image/default.webp'}
            alt={thumbnail ? '추가한 이미지 썸네일' : '기본 이미지'}
            className="rounded-md object-cover"
          />
        }
      </label>
      <input onChange={handleChange} id="image" type="file" accept="image/*" hidden />
      <div className="h-24">
        {thumbnail && (
          <button onClick={resetThumbnail} className="w-full rounded-full border border-black-40 p-4 font-bold text-black-60">
            기본 이미지로 설정하기
          </button>
        )}
      </div>
    </div>
  );
};
export default AddImage;
