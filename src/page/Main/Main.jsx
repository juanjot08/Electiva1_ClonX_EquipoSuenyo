import { ColumnContainer } from "../../components/ColumnContainer"
import { Outlet } from "react-router-dom"
import "./Main.css"
// import SideBar from "../../components/SideBar"

export const Main = () => {
    return <ColumnContainer gaps={["20%"]} customClass={"sidebar-container"}>
        {/* <SideBar /> */}
        <Outlet />
    </ColumnContainer >
}