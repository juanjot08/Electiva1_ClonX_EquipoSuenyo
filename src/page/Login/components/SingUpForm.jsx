import { LargeButton } from "../../../components/Buttons";
import { TextField } from "../../../components/TextField";
import { DateField } from "../../../components/DateField";
import "../styles/SingUpForm.css";
import { getDateInfo } from "../../../services/common/GlobalInformationService";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../authentication/contexts/AuthContext";
import {
  authStrategy,
  getAuthStrategy,
} from "../../../services/authentication/authFactory";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../constants/routes";

export const SingUpForm = () => {
  const { days, months, years } = getDateInfo();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const { authState, signUpUser } = useContext(AuthContext);

  const handleAuth = async (authType) => {
    try {
      const strategy = getAuthStrategy(authType);

      await signUpUser(strategy, email, password, name);

    } catch (error) {
      console.error("Authentication failed:", error);
    }
  };

  useEffect(() => {
    if (authState.logged) {
      navigate(routes.home);
    }
  }, [authState.logged, navigate]);

  return (
    <>
      <div className="singUp-content">
        <h1>Crea tu cuenta</h1>
        <TextField
          label="Nombre"
          maxLength={50}
          inputValue={name}
          setInputValue={setName}
        />
        <br />
        <TextField label="Correo" inputValue={email} setInputValue={setEmail} />
        <br />
        <TextField
          label="Contraseña"
          maxLength={50}
          password={true}
          inputValue={password}
          setInputValue={setPassword}
        />

        <h4>Fecha de nacimiento</h4>
        <p>
          Esta información no será pública. Confirma tu propia edad, incluso si
          esta cuenta es para una empresa, una mascota u otra cosa.
        </p>
        <div className="flex-row">
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
          fn={() => handleAuth(authStrategy.emailPassword)}
        />
      </div>
    </>
  );
};
