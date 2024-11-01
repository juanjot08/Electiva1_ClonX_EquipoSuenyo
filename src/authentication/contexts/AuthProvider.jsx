import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "../reducers/authReducer";
import { useAuth } from "../hooks/useAuth";
import SessionStorageService from "../../services/common/LocalStorageService";

const initialState = {
  logged: false,
  user: {},
};

const init = () => {
  const user = SessionStorageService.getItem("user");

  const isLogged = !user ? false : true;

  const state = {
    logged: isLogged,
    user,
  };

  return state;
};

export const AuthProvider = ({ children }) => {
  
  const [authState, dispatch] = useReducer(authReducer, initialState, init);

  const { logInUser, logOutUser, signUpUser, getLogedUserInfo } =
    useAuth(dispatch);

  return (
    <AuthContext.Provider
      value={{ authState, logInUser, logOutUser, signUpUser, getLogedUserInfo }}
    >
      {children}
    </AuthContext.Provider>
  );
};
