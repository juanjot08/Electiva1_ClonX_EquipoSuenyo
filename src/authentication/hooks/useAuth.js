import {
  createUser,
  getUserById,
} from "../../infrastructure/firebase/repositories/user.repository";
import SessionStorageService from "../../services/common/LocalStorageService";
import { authTypes } from "../types/authTypes";

export const useAuth = (dispatch) => {
  const logInUser = async (strategy, email = null, password = null) => {
    console.log(email, password)
    const result =
      email && password
        ? await strategy.logIn(email, password)
        : await strategy.logIn();

    if (!result.success) {
      await dispatch({
        type: authTypes.error,
        payload: { errorMessage: result.errorMessage },
      });
      return false;
    }

    const { user } = result;

    await dispatch({ type: authTypes.logIn, payload: user });

    const userFound = await getUserById(user.uid);

    SessionStorageService.setItem("user", userFound);

    return user;
  };

  const signUpUser = async (
    strategy,
    email = null,
    password = null,
    displayName = null
  ) => {
    const { success, user, errorMessage } = await strategy.signUp(
      email,
      password,
      displayName
    );

    if (!success) {
      await dispatch({ type: authTypes.error, payload: { errorMessage } });
      return false;
    }

    const date = new Date();

    const registerDate = {
      year: date.getFullYear(),
      month: date.getMonth(),
      day: date.getDay(),
    };

    await createUser(
      user.uid,
      user.email.split("@")[0],
      user.displayName,
      user.photoURL,
      registerDate
    );

    const userFound = await getUserById(user.uid);

    SessionStorageService.setItem("user", userFound);
    await dispatch({ type: authTypes.logIn, payload: user });

    return user;
  };

  const logOutUser = (strategy) => {
    strategy.logOut();
    dispatch({ type: authTypes.logOut });
  };

  const getLogedUserInfo = () => {
    return SessionStorageService.getItem("user");
  };

  return { logInUser, signUpUser, logOutUser, getLogedUserInfo };
};
