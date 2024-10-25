import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../authentication/contexts/AuthContext";

const PrivateRoutes = () => {
  const { authState } = useContext(AuthContext);

  return authState.logged ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
