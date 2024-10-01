import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BaseLayout } from "./page/main/Main";
import { LoginPage } from "./page/login/Login";
import { ProfileUserPage } from "./page/profile/Profile";
import { HomePage } from "./page/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route element={<BaseLayout />}>
          <Route path="/home" element={<HomePage />}></Route>
          <Route exact path="/:userName" element={<ProfileUserPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
