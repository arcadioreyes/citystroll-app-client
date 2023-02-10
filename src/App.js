import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import css from './styles/app.module.scss'

//Pages
import Home from './pages/Home';
import StrollDetails from './pages/StrollDetails';
import Banner from "./components/Banner/Banner";
 
function App() {
  const location = useLocation();

  return (
    <div className={`bg-primary ${css.container}`}>
      { location.pathname === "/" && <Header/>}
      { location.pathname !== "/" && <Navbar/>}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/stroll" element={<Banner/>} />
        <Route path="/stroll/:id" element={<StrollDetails />} />
      </Routes>
    </div>
  );
}
 
export default App;
