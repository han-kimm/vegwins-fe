import { SetSubmitData } from '@/constants/default';
import Image from 'next/image';
import { KeyboardEvent, memo } from 'react';
import WriteFormRow from '@/components/write_main/WriteFormRow';

const REG = /#[a-z0-9_가-힣]+/;

interface Props {
  hashtag: Set<string>;
  setHashtag: SetSubmitData;
}

const WriteHashtag = memo(function WriteHashtag({ hashtag, setHashtag }: Props) {
  const WriteHashtag = (e: KeyboardEvent) => {
    const input = e.target as HTMLInputElement;
    const newValue = input.value;

    if (e.key !== 'Enter' || !newValue) {
      return;
    }

    if (!REG.test(newValue)) {
      input.value = '';
      input.placeholder = '"#태그명"으로 입력해 주세요.';

      return;
    }
    if (hashtag.has(newValue)) {
      input.value = '';
      input.placeholder = '이미 추가된 태그입니다.';
      return;
    }
    input.value = '';
    setHashtag((prev) => ({ ...prev, hashtag: (prev.hashtag.add(newValue), new Set(prev.hashtag)) }));
  };

  const deleteHashtag = (tag: string) => () => {
    setHashtag((prev) => ({ ...prev, hashtag: (prev.hashtag.delete(tag), new Set(prev.hashtag)) }));
  };

  return (
    <WriteFormRow label="해시태그">
      <div className="flex grow flex-col gap-8">
        <input
          type="search"
          onKeyUp={WriteHashtag}
          placeholder="'#특징' 추가해 주세요."
          className="webkit w-full border-b border-black-60 bg-transparent font-bold focus:outline-none"
        />
        <div className="flex min-h-max flex-wrap gap-8">
          {[...hashtag].map((tag) => (
            <button
              type="button"
              onClick={deleteHashtag(tag)}
              className="flex-center animate-fadeIn gap-8 rounded-full border border-black-80 px-8 active:bg-black-80"
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
