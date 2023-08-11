import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase-config";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const Auth = ({ setIsAuth }) => {
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken);
      setIsAuth(true);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="auth">
      <p>Sign In with Google to continue</p>
      <button className="sign-in-btn" onClick={signInWithGoogle}>Sign In With Google</button>
    </div>
  );
};

export default Auth;
