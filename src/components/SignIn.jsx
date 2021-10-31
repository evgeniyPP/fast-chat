import 'firebase/auth';
import { firebase, auth } from '../firebase';
import { t } from '../locale/index';

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return <button onClick={signInWithGoogle}>{t('Sign in with Google')}</button>;
}

export default SignIn;
