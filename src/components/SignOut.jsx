import { auth } from '../firebase';
import { t } from '../locale/index';

function SignOut() {
  return auth.currentUser && <button onClick={() => auth.signOut()}>{t('Sign Out')}</button>;
}

export default SignOut;
