import { AppleIconSVG, GoogleIconSVG } from "../../../components/Images";
import { LargeButton } from "../../../components/Buttons";
import { TextField } from "../../../components/TextField";

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
      <TextField label="Teléfono o correo electrónico"/>
      <LargeButton label="Siguiente"></LargeButton>
      <br />
      <LargeButton label="¿Olvidaste tu contraseña?" styleType="quaternary" customStyles={{border: "1px solid white"}}></LargeButton>
    </>
  );
};
