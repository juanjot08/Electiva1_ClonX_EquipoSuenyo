import { AppleIconSVG, GoogleIconSVG } from "../../../components/Images";
import { LargeButton } from "../../../components/Buttons";
import { TextField } from "../../../components/TextField";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../constants/routes";
import { AuthContext } from "../../../authentication/contexts/AuthContext"
import { useContext, useState } from "react";
import { authStrategy, getAuthStrategy } from "../../../services/authentication/authFactory";

export const LoginForm = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { authState, logInUser } = useContext(AuthContext);

  const handleAuth = async (authType) => {
    try {
      const strategy = getAuthStrategy(authType);

      await logInUser(strategy, email, password);

      console.log(authState)

      if(authState.logged)
        navigate(routes.home);

    } catch (error) {
      console.error('Authentication failed:', error);
    }
  };

  return (
    <>
      <h1>Inicia sesión en X</h1>
      <LargeButton
        label="Iniciar sesión con Google"
        icon={() => GoogleIconSVG({})}
        customStyles={{fontSize: "14px"}}
      ></LargeButton>
      <br />
      <LargeButton
        label="Iniciar sesión con Apple"
        icon={() => AppleIconSVG({})}
        boldText={true}
        customStyles={{fontSize: "14px"}}
      ></LargeButton>
      <div className="divider">
        <span>o</span>
      </div>
      <TextField label="Teléfono o correo electrónico" inputValue={email} setInputValue={setEmail}/>
      <TextField label="Contraseña" password={true} inputValue={password} setInputValue={setPassword} />
      <LargeButton label="Iniciar Sesión" fn={() => handleAuth(authStrategy.emailPassword)}></LargeButton>
      <br />
      <LargeButton label="¿Olvidaste tu contraseña?" styleType="quaternary" customStyles={{border: "1px solid white"}}></LargeButton>
    </>
  );
};
