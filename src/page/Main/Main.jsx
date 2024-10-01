import { ColumnContainer } from "../../components/ColumnContainer";
import { Outlet } from "react-router-dom";
import "./Main.css";
import SideBar from "../../components/SideBar";

export const BaseLayout = () => {
  /* el gap del primer dato esta siendo modificado desde la clase en el archivo SideBar.css */
  return (
    <ColumnContainer gaps={[]} widths={["30%", "70%"]}>
      <div className="sidebar-container">
        <SideBar />
      </div>
      <Outlet />
    </ColumnContainer>
  );
};
