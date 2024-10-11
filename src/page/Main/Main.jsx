import { ColumnContainer } from "../../components/ColumnContainer";
import { Outlet } from "react-router-dom";
import "./Main.css";
import SideBar from "../../components/SideBar";
import { ProfileIcon } from "../../components/ProfileIcon";
import "../../styles/Common.css"


export const BaseLayout = () => {
  return (
    <ColumnContainer gaps={["2%"]} widths={["30%", "70%"]}>
      <div className="sidebar-container">
        <SideBar />
        <span className="button quaternary-button sidebar_button flex-row" style={{marginBottom: "5%"}}>
          <ProfileIcon imageUrl={"https://random-image-pepebigotes.vercel.app/api/random-image"} />
          <div className="flex-column">
            <span style={{color: "white"}}>Juan Tellez</span>
            <span>@Juancho2Jose</span>
          </div>
          <div>
            ...
          </div>
        </span>
      </div>
      <Outlet />
    </ColumnContainer>
  );
};
