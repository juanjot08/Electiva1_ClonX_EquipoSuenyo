import { LargeButton } from "../../../components/Buttons";
import { AppleIconSVG, GoogleIconSVG } from "../../../components/Images";

export const LoginForm = () => {
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
      <input type="text" name="" id="" />
      <LargeButton label="Siguiente"></LargeButton>
      <LargeButton label="¿Olvidaste tu contraseña?" styleType="terciary"></LargeButton>
    </>
  );
};
