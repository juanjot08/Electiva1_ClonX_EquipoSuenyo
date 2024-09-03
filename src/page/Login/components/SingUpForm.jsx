import { LinkTextButton } from "../../../components/Buttons";
import { TextField } from "../../../components/TextField";

export const SingUpForm = () => {
  return (
    <>
      <h1>Crea tu cuenta</h1>
      <TextField label="Nombre" maxLength={50}/>
      <TextField label="Teléfono"/>

      <LinkTextButton normalText="Usar Correo"></LinkTextButton>

      <h4>Fecha de nacimiento</h4>
      <p>
        Esta información no será pública. Confirma tu propia edad, incluso si
        esta cuenta es para una empresa, una mascota u otra cosa.
      </p>
      <div>
        <input type="text" name="" id="" />
        <input type="text" name="" id="" />
        <input type="text" name="" id="" />
      </div>
    </>
  );
};
