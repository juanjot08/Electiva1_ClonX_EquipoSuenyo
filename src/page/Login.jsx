import { ColumnContainer } from "../components/ColumnContainer";
import "../styles/Login.css";

export const LoginPage = () => {
  return (
    <ColumnContainer gaps={["20%", "10%"]}>
      <div className="container-logo">
        <img src="/images/icon-default-maskable-large.35928fda.png" alt="" />
      </div>
      <div className="container-controls">
        <h1>
          Lo que está <br /> pasando ahora
        </h1>
        <h2>Únete Hoy</h2>
        <div className="container-buttons">
          <button>Registrate con Google</button>
          <button>Registrate con Apple</button>
          <div className="divider">
            <span>o</span>
          </div>
          <button>Crear Cuenta</button>
          <p>
            Al registrarte, aceptas los Términos de servicio y la Política de
            privacidad, incluida la política de Uso de Cookies.
          </p>
          <br />
          <h3>¿Ya tienes una cuenta?</h3>
          <button>Iniciar Sesión</button>
        </div>
      </div>
    </ColumnContainer>
  );
};
