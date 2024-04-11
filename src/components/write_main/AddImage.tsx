import Image from 'next/image';
import { ChangeEvent, memo, useState } from 'react';

const AddImage = memo(function AddImage() {
  const [thumbnail, setThumbnail] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newFile = e.target.files?.[0];
    if (!newFile) {
      return;
    }

    const newThumbnail = URL.createObjectURL(newFile);
    setThumbnail((prev) => (prev && URL.revokeObjectURL(prev), newThumbnail));
    e.target.value = '';
  };

  const resetThumbnail = () => {
    setThumbnail('');
  };

  return (
    <div className="mb-12 flex w-full flex-col gap-8">
      <div className="flex items-baseline gap-8">
        <h2 className="text-18 font-medium">이미지</h2>
        {thumbnail && (
          <button onClick={resetThumbnail} className=" p-4 font-bold text-sky">
            기본 이미지로 설정하기
          </button>
        )}
      </div>
      <label
        htmlFor="image"
        className="flex-center transform-active relative mx-auto block h-300 w-300 rounded-md border border-black-40 text-black-60 active:opacity-70"
        tabIndex={0}
      >
        {
          <Image
            fill
            priority
            sizes="300px"
            src={thumbnail || '/image/default.webp'}
            alt={thumbnail ? '추가한 이미지 썸네일' : '기본 이미지'}
            className="rounded-md object-cover"
          />
        }
      </label>
      <input onChange={handleChange} id="image" type="file" accept="image/*" hidden />
    </div>
  );
});
export default AddImage;
