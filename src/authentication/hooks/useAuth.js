import LocalStorageService from "../../services/common/LocalStorageService";
import { authTypes } from "../types/authTypes";

export const useAuth = (dispatch) => {
  
  const logInUser = async (strategy, email = null, password = null) => {

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
    
    LocalStorageService.setItem("user", user);

    return user;
  };

  const signUpUser = async (strategy, email = null, password = null, displayName = null) => {
    const { success, user, errorMessage } = await strategy.signUp(
      email,
      password,
      displayName
    );

    if (!success) {
      await dispatch({ type: authTypes.error, payload: { errorMessage } });
      return false;
    }

    LocalStorageService.setItem("user", user);
    await dispatch({ type: authTypes.logIn, payload: user });

    return user;
  };

  const logOutUser = (strategy) => {
    strategy.logOut();
    dispatch({ type: authTypes.logOut });
  };

  return { logInUser, signUpUser, logOutUser };
};
