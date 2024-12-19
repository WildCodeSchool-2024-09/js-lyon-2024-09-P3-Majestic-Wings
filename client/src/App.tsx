import { Outlet } from "react-router-dom";
import "./App.css";
import BurgerMenu from "./components/MenuBurger/MenuBurger";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <nav className="NavBar">
        <Login />
        <BurgerMenu />
      </nav>
      <Outlet />
      <Footer />
    </>
  );
}
