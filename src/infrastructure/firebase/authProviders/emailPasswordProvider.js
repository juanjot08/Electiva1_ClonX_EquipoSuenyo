import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../config";

export const SignupWithEmail = async ( email, password, displayName ) => {

  if (!email || !password) {
    console.error("Provide Email and Password");
    return{
      ok: false
    };
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const { uid, photoURL } = userCredential.user;

    await updateProfile(auth.currentUser, { displayName });

    return {
      ok: true,
      uid,
      photoURL,
      email,
      displayName
    };

  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.log("errorCode:", errorCode, "errorMessage:", errorMessage);

    return {
      ok: false
    }
  }
};

export const SignInWithEmail = async ( email, password ) => {
  if (!email || !password) {
    console.error("Provide Email and Password");
    return;
  }
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;

    return {
      ok: true,
      user,
    };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.log("errorCode:", errorCode, "errorMessage:", errorMessage);
  }
};
