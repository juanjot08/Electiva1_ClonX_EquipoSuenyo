import { ColumnContainer } from "../../components/ColumnContainer";
import { LargeButton } from "../../components/Buttons";
import "../../styles/pages/Login.css";
import { GoogleIconSVG, AppleIconSVG } from "../../components/Images";
import { Modal } from "../../components/Modals";
import { SingUpForm } from "./components/SingUpForm";
import { useState } from "react";
import { LoginForm } from "./components/LogInForm";

export const LoginPage = () => {
  const [showSingUpModal, setshowSingUpModal] = useState(false);
  const [showLoginModal, setshowLoginModal] = useState(false);

  return (
    <>
      <ColumnContainer widths={["50%", "50%"]}>
        <div className="container-logo">
          <img src="/images/icon-default-maskable-large.35928fda.png" alt="" />
        </div>
        <div className="container-controls">
          <h1>
            Lo que está <br /> pasando ahora
          </h1>
          <h2>Únete Hoy</h2>
          <div className="container-buttons">
            <LargeButton
              label="Registrate con Google"
              icon={() => GoogleIconSVG({})}
            ></LargeButton>
            <br />
            <LargeButton
              label="Registrate con Apple"
              icon={() => AppleIconSVG({})}
              boldText={true}
            ></LargeButton>
            <div className="divider">
              <span>o</span>
            </div>
            <LargeButton
              label="Crear cuenta"
              styleType="tertiary"
              fn={() => setshowSingUpModal(true)}
            ></LargeButton>
            <p>
              Al registrarte, aceptas los{" "}
              <a href="https://x.com/tos">Términos de servicio</a> y la
              <a href="https://x.com/privacy"> Política de privacidad</a>,
              incluida la política de{" "}
              <a href="https://help.x.com/rules-and-policies/twitter-cookies">
                Uso de Cookies
              </a>
              .
            </p>
            <br />
            <h3>¿Ya tienes una cuenta?</h3>
            <LargeButton
              label="Iniciar sesión"
              styleType="secondary"
              fn={() => setshowLoginModal(true)}
            ></LargeButton>
          </div>
        </div>
      </ColumnContainer>
      <Modal
        shouldShow={showSingUpModal}
        onRequestClose={() => setshowSingUpModal(false)}
      >
        <SingUpForm />
      </Modal>
      <Modal
        shouldShow={showLoginModal}
        onRequestClose={() => setshowLoginModal(false)}
      >
        <LoginForm />
      </Modal>
    </>
  );
};
