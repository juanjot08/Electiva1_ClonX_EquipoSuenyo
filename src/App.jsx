import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BaseLayout } from "./page/Main/Main";
import { LoginPage } from "./page/Login/Login";
import { ProfileUserPage } from "./page/profile/Profile";
import { HomePage } from "./page/home/Home";
import { Follow } from "./page/follow/Follow";
import PrivateRoutes from "./tools/PrivateRoutes";
import { SearchUsers } from "./page/searchUsers/searchUsers";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route element={<PrivateRoutes />}>
          <Route element={<BaseLayout />}>
            <Route path="/home" element={<HomePage />}></Route>
            <Route exact path="/:userName" element={<ProfileUserPage />}></Route>
            <Route exact path="/:userName/followers" element={<Follow rute={"followers"}/>}></Route>
            <Route exact path="/:userName/following" element={<Follow rute={"following"}/>}></Route>
            <Route path="/search/:userName" element={<SearchUsers />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
