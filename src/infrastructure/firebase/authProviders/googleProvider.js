import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../config";

export const SignUpWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();

    provider.setCustomParameters({ prompt: "select_account" });

    const result = await signInWithPopup(auth, provider);

    const credential = GoogleAuthProvider.credentialFromResult(result);

    if (!credential) {
      console.error("Error in user Credential");
      return;
    }
    const { displayName, email, photoURL, uid } = result.user;
    
    return {
      ok: true,
      uid,
      photoURL,
      email,
      displayName,
    };

  } catch (error) {
    const errorMessage = error.message;

    return {
      ok: false,
      errorMessage
    };
  }
};