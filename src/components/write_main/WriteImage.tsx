import { SetSubmitData, SubmitData } from '@/constants/default';
import { useDraggable } from '@/hooks/useDragScroll';
import imageCompression from 'browser-image-compression';
import Image from 'next/image';
import { ChangeEvent, memo, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import IconPlus from 'public/icon/plus.svg';

interface Props {
  image: SubmitData['image'];
  setImage: SetSubmitData;
}

const WriteImage = memo(function WriteImage({ image, setImage }: Props) {
  const [thumbnail, setThumbnail] = useState<string[]>(image as string[]);

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) {
      return;
    }
    let count = thumbnail.length;
    for (const newFile of files) {
      count++;
      if (count > 2) {
        toast.error('2장까지만 추가됩니다.');
        break;
      }
      if (!['image/png', 'image/jpg', 'image/jpeg'].includes(newFile.type)) {
        toast.error('png, jpg, jpeg 확장자만 업로드 가능합니다.');
        return;
      }

      const options = {
        maxSizeMB: 0.2,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
      };
      const compressedFile = await imageCompression(newFile, options);
      setImage((prev) => ({ ...prev, image: [...prev.image, compressedFile] }));

      const newthumbnail = URL.createObjectURL(newFile);
      setThumbnail((prev) => [...prev, newthumbnail]);
    }
    e.target.value = '';
  };

  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollHandler = useDraggable(scrollRef);

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="mb-12 flex w-full flex-col gap-8">
      <div className="flex h-40 items-baseline gap-8">
        <h2 className="text-18 font-medium">이미지</h2>
        <p className="text-12">이미지를 눌러 삭제할 수 있습니다.</p>
      </div>
      <div ref={scrollRef} {...scrollHandler} className="flex gap-8 overflow-x-scroll">
        {thumbnail.map(
          (v, i) =>
            v && (
              <button
                key={v}
                onClick={() => {
                  setImage((prev) => ({ ...prev, image: prev.image.filter((_, idx) => idx !== i) }));
                  setThumbnail((prev) => prev.filter((_, idx) => idx !== i));
                }}
                type="button"
                className="relative h-200 w-200 shrink-0"
              >
                <Image fill sizes="200px" src={v} alt={thumbnail ? '추가한 이미지 썸네일' : '기본 이미지'} className="rounded-md object-cover" />
                {!i && <div className="absolute left-8 top-8 rounded-sm bg-black-100 px-8 py-4 text-white">대표 이미지</div>}
              </button>
            ),
        )}
        <label
          htmlFor="image"
          className="transform-active flex-center text-balck-80 mx-auto h-200 w-full max-w-200 shrink-0 flex-col gap-8 rounded-sm border border-black-60 text-16"
          tabIndex={0}
        >
          <IconPlus />
          <span>이미지 추가하기</span>
        </label>
      </div>
      <input onChange={handleChange} ref={inputRef} id="image" type="file" multiple accept="image/png,.jpg,.jpeg" hidden />
    </div>
  );
});
export default WriteImage;
