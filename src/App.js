import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import css from './styles/app.module.scss'

 
function App() {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
 
export default App;
