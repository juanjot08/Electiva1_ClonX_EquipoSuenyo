import { LargeButton, LinkTextButton } from "../../../components/Buttons";
import { TextField } from "../../../components/TextField";
import { DateField } from "../../../components/DateField";
import "../styles/SingUpForm.css";
import { getDateInfo } from "../../../services/GlobalInformationService";
import { useState } from "react";

export const SingUpForm = () => {
  const { days, months, years } = getDateInfo();

  const [email, setEmail] = useState(false);

  return (
    <>
      <div className="singUp-content">
        <h1>Crea tu cuenta</h1>
        <TextField label="Nombre" maxLength={50} />
        <br />
        {!email ? <TextField label="Teléfono" /> : <TextField label="Correo" />}

        <LinkTextButton
          fn={() => setEmail(!email)}
          normalText={!email ? "Usar Correo" : "Usar Teléfono"}
        ></LinkTextButton>

        <h4>Fecha de nacimiento</h4>
        <p>
          Esta información no será pública. Confirma tu propia edad, incluso si
          esta cuenta es para una empresa, una mascota u otra cosa.
        </p>
        <div className="longDate-container">
          <DateField
            label={"Mes"}
            n={"200px"}
            data={months.map((x) => x.name)}
          />
          <DateField label={"Dia"} n={"100px"} data={days} />
          <DateField label={"Año"} n={"100px"} data={years} />
        </div>

        <LargeButton
          label={"Registrarse"}
          styleType="tertiary"
          customStyles={{ width: "400px" }}
        />
      </div>
    </>
  );
};
