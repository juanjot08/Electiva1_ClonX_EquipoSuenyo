import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./page/main/main";
import { LoginPage } from "./page/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/main" element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
