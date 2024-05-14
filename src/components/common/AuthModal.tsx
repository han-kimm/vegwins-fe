import Link from 'next/link';
import ModalFrame from '@/components/common/ModalFrame';
import ModalPortal from '@/components/common/ModalPortal';
import IconGoogle from 'public/icon/google.svg';

interface Props {
  closeModal: () => void;
}

const AuthModal = ({ closeModal }: Props) => {
  return (
    <ModalPortal>
      <ModalFrame closeModal={closeModal}>
        <h2 className="mb-20 text-18 font-bold">로그인</h2>
        <Link
          href={makeGoogleURL()}
          className="flex-center transform-active my-auto gap-12 rounded-full border border-black-20 bg-black-0 py-8 text-16 font-medium"
        >
          <IconGoogle />
          구글 계정으로 로그인
        </Link>
        <span className="text-12">
          구글 계정의 고유식별번호 외 <strong>개인 정보는 저장되지 않습니다.</strong>
        </span>
      </ModalFrame>
    </ModalPortal>
  );
};
export default AuthModal;

const makeGoogleURL = () => {
  const endPoint = 'https://accounts.google.com/o/oauth2/v2/auth';
  const config = {
    client_id: process.env.NEXT_PUBLIC_ID_GOOGLE ?? '',
    redirect_uri: process.env.NEXT_PUBLIC_URI_GOOGLE ?? '',
    response_type: 'code',
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
