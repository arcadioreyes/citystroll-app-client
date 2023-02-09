import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import css from "./styles/app.module.scss";
import HomePage from "./components/HomePage/HomePage";
import SignUpPage from "./components/SignUpPage/SignUpPage";
import LoginPage from "./components/LoginPage/LoginPage";

function App() {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/signuppage" element={<SignUpPage />} />
        <Route path="/loginpage" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
