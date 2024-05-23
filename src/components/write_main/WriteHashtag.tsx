import { SetSubmitData } from '@/constants/default';
import useDebounce from '@/hooks/useDebounce';
import useUncontrolInput from '@/hooks/useUncontrolInput';
import Image from 'next/image';
import { memo } from 'react';
import WriteFormRow from '@/components/write_main/WriteFormRow';

const REG = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣\s]{1,8}$/;

interface Props {
  hashtag: string[];
  setHashtag: SetSubmitData;
}

const WriteHashtag = memo(function WriteHashtag({ hashtag, setHashtag }: Props) {
  const { ref, refCallback } = useUncontrolInput<HTMLInputElement>({ syncState: '' });
  const handleChange = useDebounce(() => {
    makeHashtag();
  }, 500);

  const makeHashtag = () => {
    if (!ref.current) {
      return;
    }
    let index = -1;
    const tags: string[] = [];
    const value = ref.current.value;
    const length = value.length;

    for (let i = 0; i < length; i++) {
      const cur = value[i];
      if (cur === ' ') {
        continue;
      }
      if (cur === '#') {
        index++;
        continue;
      }

      if (index > -1) {
        const tag = tags[index];
        tags[index] = (tag ?? '') + cur;
      }
    }
    const newTags = tags.filter((v) => REG.test(v));
    console.log(newTags);
    setHashtag((prev) => ({ ...prev, hashtag: newTags }));
  };

  const deleteHashtag = (tag: string) => () => {
    setHashtag((prev) => ({ ...prev, hashtag: prev.hashtag.filter((v) => v !== tag) }));

    if (!ref.current) {
      return;
    }
    const deleteValue = '#' + tag;
    const currentValue = ref.current.value;
    ref.current.value = currentValue.replace(deleteValue, '');
  };

  return (
    <WriteFormRow label="해시태그">
      <div className="flex grow flex-col gap-8">
        <input
          type="search"
          ref={refCallback}
          onChange={handleChange}
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
