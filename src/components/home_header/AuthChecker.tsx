import { getCookie } from '@/utils/cookie';
import AuthCheckerAfter from '@/components/home_header/AuthCheckerAfter';
import AuthCheckerButton from '@/components/home_header/AuthCheckerButton';

const AuthChecker = async () => {
  const session = await getCookie('session');
  return session ? <AuthCheckerAfter /> : <AuthCheckerButton />;
};
export default AuthChecker;
