import { SignUpWithGoogle } from "../../../infrastructure/firebase/authProviders/googleProvider";
import SessionStorageService from "../../common/LocalStorageService";

export default class GoogleAuth {
  async logIn() {
    const { ok, uid, email, photoURL, errorMessage, displayName } =
      await SignUpWithGoogle();

    if (!ok) {
      return { success: false, errorMessage };
    }

    return {
      success: true,
      user: { uid, email, photoURL, displayName },
    };
  }

  async signUp(email, password) {
    const { ok, uid, photoURL, errorMessage, displayName } =
      await SignUpWithGoogle(email, password);

    if (!ok) {
      return { success: false, errorMessage };
    }

    return {
      success: true,
      user: { uid, email, photoURL, displayName },
    };
  }

  logOut() {
    SessionStorageService.removeItem("user");
  }
}
