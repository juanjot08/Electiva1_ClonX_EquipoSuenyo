import { SignUpWithGoogle } from "../../../infrastructure/firebase/authProviders/googleProvider";
import LocalStorageService from "../../common/LocalStorageService";

export default class GoogleAuth {
  // async logIn() {
  //   const { ok, uid, photoURL, displayName, errorMessage } = await SignUpWithGoogle();

  //   if (!ok) {
  //     return { success: false, errorMessage };
  //   }

  //   return {
  //     success: true,
  //     user: { uid, email, photoURL, displayName },
  //   };
  // }

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
    LocalStorageService.removeItem("user");
  }
}
