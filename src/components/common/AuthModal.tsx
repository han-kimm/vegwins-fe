import useModalScroll from '@/hooks/useModalScroll';
import Link from 'next/link';
import ModalFrame from '@/components/common/ModalFrame';
import IconGoogle from 'public/icon/google.svg';

interface Props {
  closeModal: () => void;
}

const AuthModal = ({ closeModal }: Props) => {
  useModalScroll();
  return (
    <ModalFrame closeModal={closeModal}>
      <h2 className="text-18 font-bold">로그인</h2>
      <Link
        href={makeGoogleURL()}
        className="flex-center transform-active my-auto h-40 gap-12 rounded-full border border-black-20 bg-black-0 text-14 font-medium"
      >
        <IconGoogle />
        구글 계정으로 로그인
      </Link>
    </ModalFrame>
  );
};
export default AuthModal;

const makeGoogleURL = () => {
  const endPoint = 'https://accounts.google.com/o/oauth2/v2/auth';
  const config = {
    client_id: process.env.NEXT_PUBLIC_ID_GOOGLE!,
    redirect_uri: 'http://localhost:3000/auth/google',
    response_type: 'token',
    scope: 'https://www.googleapis.com/auth/userinfo.profile',
    include_granted_scopes: 'true',
    state: 'pass-through value',
  };
  const configKey = Object.keys(config) as (keyof typeof config)[];

  const params = new URLSearchParams();
  for (const key of configKey) {
    params.set(key, config[key]);
  }
  const newParams = params.toString();
  return endPoint + '?' + newParams;
};
