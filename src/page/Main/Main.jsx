import { ColumnContainer } from "../../components/ColumnContainer";
import { Outlet } from "react-router-dom";
import "./Main.css";
import SideBar from "../../components/SideBar";
import { ProfileIcon } from "../../components/ProfileIcon";
import "../../styles/Common.css";
import { useContext } from "react";
import { AuthContext } from "../../authentication/contexts/AuthContext";

export const BaseLayout = () => {
  const { getLogedUserInfo } = useContext(AuthContext);

  const user = getLogedUserInfo();

  return (
    <ColumnContainer gaps={["2%"]} widths={["30%", "70%"]}>
      <div className="sidebar-container">
        <SideBar />
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
      </div>
      <Outlet />
    </ColumnContainer>
  );
};
