import { SetSubmitData } from '@/constants/default';
import useUncontrolInput from '@/hooks/useUncontrolInput';
import Image from 'next/image';
import { KeyboardEvent, memo } from 'react';
import WriteFormRow from '@/components/write_main/WriteFormRow';

const REG = /#[a-z0-9가-힣\s]{1,8}$/;

interface Props {
  hashtag: string[];
  setHashtag: SetSubmitData;
}

const WriteHashtag = memo(function WriteHashtag({ hashtag, setHashtag }: Props) {
  const { ref, refCallback } = useUncontrolInput<HTMLInputElement>();

  const handleChange = (e: KeyboardEvent) => {
    if (!ref.current || e.code !== 'Enter' || e.key !== 'Enter') {
      return;
    }

    const value = ref.current.value;
    ref.current.value = '';

    if (REG.test(value)) {
      setHashtag((prev) => ({ ...prev, hashtag: [...prev.hashtag, value] }));
    }
  };

  const deleteHashtag = (tag: string) => () => {
    setHashtag((prev) => ({ ...prev, hashtag: prev.hashtag.filter((v) => v !== tag) }));
  };

  return (
    <WriteFormRow label="해시태그">
      <div className="flex grow flex-col gap-8">
        <input
          type="text"
          defaultValue=""
          ref={refCallback}
          onKeyDown={handleChange}
          placeholder="#특징 #검색어 #브랜드"
          className="webkit w-full border-b border-black-60 bg-transparent font-bold focus:outline-none"
        />
        <div className="flex min-h-32 flex-wrap gap-8">
          {[...hashtag].map((tag) => (
            <button
              type="button"
              onClick={deleteHashtag(tag)}
              className="flex-center h-32 animate-fadeIn gap-8 rounded-full border border-black-80 px-8 active:bg-black-80"
              key={tag}
            >
              {tag}
              <Image width={10} height={10} src="/icon/cancel.svg" alt="해시태그 삭제" />
            </button>
          ))}
        </div>
      </div>
    </WriteFormRow>
  );
});
export default WriteHashtag;
