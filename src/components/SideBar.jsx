import React, { useContext } from "react";
import { IconButton, LargeButton } from "./Buttons";
import {
  UnfilledHomeIconSVG,
  XIconSVG,
  SearchIconSVG,
  NotificationIconSVG,
  EmailIconSVG,
  GrokIconSVG,
  PeopleIconSVG,
  PersonIconSVG,
  OptionsIconSVG,
  SavesIconSVG,
  LightningIconSVG,
} from "./Images";
import "../styles/Components/SideBar.css";
import { routes } from "../constants/routes";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../authentication/contexts/AuthContext";

function SideBar() {
  const [windowSize, setWindowSize] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const navigate = useNavigate();

  const { getLogedUserInfo } = useContext(AuthContext);

  const user = getLogedUserInfo();

  React.useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav id="sidebar">
      <IconButton
        icon={() => XIconSVG({})}
        fn={() => navigate(routes.home)}
        color="white"
        circleLenght="40px"
        customClass="first-sidebar-button"
      />
      <LargeButton
        icon={() => UnfilledHomeIconSVG({})}
        fn={() => navigate(routes.home)}
        label="Inicio"
        styleType="quaternary"
        customClass="sidebar_button"
      />
      <LargeButton
        icon={() => SearchIconSVG({})}
        label="Explorar"
        styleType="quaternary"
        customClass="sidebar_button"
      />
      <LargeButton
        icon={() => NotificationIconSVG({})}
        label="Notificaciones"
        styleType="quaternary"
        customClass="sidebar_button"
      />
      <LargeButton
        icon={() => EmailIconSVG({})}
        label="Mensajes"
        styleType="quaternary"
        customClass="sidebar_button"
      />
      <LargeButton
        icon={() => GrokIconSVG({})}
        label="Grok"
        styleType="quaternary"
        customClass="sidebar_button"
      />
      {windowSize?.height > 750 && (
        <LargeButton
          icon={() => SavesIconSVG({})}
          label="Guardados"
          styleType="quaternary"
          customClass="sidebar_button"
        />
      )}
      {windowSize?.height > 600 && (
        <LargeButton
          icon={() => PeopleIconSVG({})}
          label="Comunidades"
          styleType="quaternary"
          customClass="sidebar_button"
        />
      )}
      {windowSize?.height > 600 && (
        <LargeButton
          icon={() => XIconSVG({})}
          label="Premium"
          styleType="quaternary"
          customClass="sidebar_button"
        />
      )}
      {windowSize?.height > 750 && (
        <LargeButton
          icon={() => LightningIconSVG({})}
          label="Organizaciones ver"
          styleType="quaternary"
          customClass="sidebar_button"
        />
      )}
      <LargeButton
        icon={() => PersonIconSVG({})}
        fn={() => navigate(user.userName)}
        label="Perfil"
        styleType="quaternary"
        customClass="sidebar_button"
      />
      <LargeButton
        icon={() => OptionsIconSVG({})}
        label="Más opciones"
        styleType="quaternary"
        customClass="sidebar_button"
      />
    </nav>
  );
}

export default SideBar;
