import {
  SignInWithEmail,
  SignupWithEmail,
} from "../../../infrastructure/firebase/authProviders/emailPasswordProvider";
import LocalStorageService from "../../common/LocalStorageService";

export default class EmailPasswordAuth {

  async logIn(email, password) {    
    const { ok, uid, photoURL, displayName, errorMessage } =
      await SignInWithEmail(email, password);

    if (!ok) {
      return { success: false, errorMessage };
    }

    return {
      success: true,
      user: { uid, email, photoURL, displayName },
    };
  }

  async signUp(email, password, displayName) {
    const { ok, uid, photoURL, errorMessage } = await SignupWithEmail(
      email,
      password
    );

    if (!ok) {
      return { success: false, errorMessage };
    }

    return {
      success: true,
      user: { uid, email, photoURL, displayName },
    };
  }

  logOut() {
    LocalStorageService.removeItem("user");
  }
}
