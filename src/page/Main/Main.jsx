import { ColumnContainer } from "../../components/ColumnContainer";
import { Outlet } from "react-router-dom";
import "./Main.css";
import SideBar from "../../components/SideBar";
import { ProfileIcon } from "../../components/ProfileIcon";
import "../../styles/Common.css";
import { useContext } from "react";
import { AuthContext } from "../../authentication/contexts/AuthContext";
import { ToolTips } from "../../components/ToolTips";
import { LargeButton } from "../../components/Buttons";
import { SearchMainBar } from "../../components/SearchMainBar"

export const BaseLayout = () => {
  const { getLogedUserInfo, logOutUser } = useContext(AuthContext);

  const user = getLogedUserInfo();

  return (
    <ColumnContainer gaps={["2%"]} widths={["30%", "30%", "30%"]}>
      <div className="sidebar-container">
        <SideBar />
        <ToolTips content={<LargeButton label="Cerrar Sesión" fn={() => logOutUser()}/>}>
          <span
            className="button quaternary-button sidebar_button flex-row"
            style={{ marginBottom: "5%" }}
          >
            <ProfileIcon imageUrl={user.profilePhoto} />
            <div className="flex-column">
              <span style={{ color: "white" }}>{user.name}</span>
              <span>@{user.userName}</span>
            </div>
            <div>...</div>
          </span>
        </ToolTips>
      </div>
      <Outlet />
      <div className="side-information-container" style={{color: "white"}}>
				<SearchMainBar />
      </div>
    </ColumnContainer>
  );
};
