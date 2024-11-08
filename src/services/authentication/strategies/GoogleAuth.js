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

  async signUp() {
    const { ok, uid, photoURL, errorMessage, email, displayName } =
      await SignUpWithGoogle();

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
