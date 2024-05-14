'use client';

import { Session } from '@/types/session';
import { getCookie, setCookie } from '@/utils/cookie';
import { putData } from '@/utils/fetching';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import toast from 'react-hot-toast';

const REG_NICKNAME = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣\s]{2,16}$/;

interface Props {
  session: Session;
}
const MyInfoChangeNickname = ({ session }: Props) => {
  const [value, setValue] = useState('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const [pending, setPending] = useState(false);
  const [error, setError] = useState({ message: '' });
  const nicknameChange = async () => {
    if (pending) {
      return;
    }
    if (!REG_NICKNAME.test(value)) {
      setError({ message: '2-15자 이내, 특수문자 및 초성 금지' });
      return;
    }

    try {
      setPending(true);
      const { nickname: currentNickname } = await getCookie('v_s');
      if (currentNickname === value) {
        setError({ message: '현재 닉네임과 다르게 입력해 주십시오.' });
        return;
      }
      const { nickname, error } = await putData({ path: '/user/nickname', body: { newNickname: value } });
      if (error) {
        setError({ message: error });
        return;
      }
      if (nickname) {
        toast.success('닉네임 변경 완료!');
        setCookie({ name: 'v_s', value: { nickname }, path: '/' });
        setError({ message: '' });
      }
    } catch (e: any) {
      toast.error('다시 시도해 주십시오.');
    } finally {
      setPending(false);
    }
  };
  return (
    <div className="relative flex gap-12">
      <input
        value={value}
        onChange={handleChange}
        onKeyUp={(e: KeyboardEvent) => e.code === 'Enter' && nicknameChange()}
        placeholder={session?.nickname}
        className={`${error.message ? 'border-red-600' : 'border-black-100'} w-full rounded-sm border px-12 text-18 font-bold`}
      />
      <button onClick={nicknameChange} className="transform-active shrink-0 rounded-sm bg-black-100 p-8 text-18 text-white">
        변경하기
      </button>
      <span className={`${error.message ? 'text-red-600' : ''} absolute -bottom-28 ml-8 text-16 font-medium`}>
        {error.message || '2-15자 이내, 특수문자 및 초성 금지'}
      </span>
    </div>
  );
};
export default MyInfoChangeNickname;
