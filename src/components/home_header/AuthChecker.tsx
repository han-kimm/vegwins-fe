import { getCookie } from '@/utils/cookie';
import AuthCheckerButton from '@/components/common/AuthButton';
import AuthCheckerAfter from '@/components/home_header/AuthCheckerAfter';

const AuthChecker = async () => {
  const session = await getCookie('v_s');
  return session ? <AuthCheckerAfter /> : <AuthCheckerButton />;
};
export default AuthChecker;
