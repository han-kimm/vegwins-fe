import Image from 'next/image';
import { Dispatch, KeyboardEvent, SetStateAction, memo } from 'react';

const REG = /#[a-z0-9_가-힣]+/;

interface Props {
  hashtag: Set<string>;
  setHashtag: Dispatch<SetStateAction<Set<string>>>;
}

const AddHashtag = memo(function AddHashtag({ hashtag, setHashtag }: Props) {
  const addHashtag = (e: KeyboardEvent) => {
    const input = e.target as HTMLInputElement;
    const newValue = input.value;

    if (e.code !== 'Enter' || !newValue) {
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
    setHashtag((prev) => (prev.add(newValue), new Set(prev)));
  };

  const deleteHashtag = (tag: string) => () => {
    setHashtag((prev) => (prev.delete(tag), new Set(prev)));
  };

  return (
    <div className="flex gap-40 text-18">
      <div>
        <h2 className="w-68 shrink-0 font-medium">해시태그</h2>
      </div>
      <div className="flex grow flex-col gap-8">
        <input
          onKeyUp={addHashtag}
          placeholder="'#특징' 추가해 주세요."
          className="border-b border-black-60 bg-transparent font-bold focus:outline-none"
        />
        <div className="flex flex-wrap gap-8">
          {[...hashtag].map((tag) => (
            <button
              onClick={deleteHashtag(tag)}
              className="flex-center animate-fadeIn gap-8 rounded-full border border-black-40 px-8 active:bg-black-80"
              key={tag}
            >
              {tag}
              <Image width={10} height={10} src="/icon/cancel.svg" alt="해시태그 삭제" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
});
export default AddHashtag;
