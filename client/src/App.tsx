import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import BurgerMenu from "./components/MenuBurger/MenuBurger";

export default function App() {
  return (
    <>
      <nav className="NavBar">
        <BurgerMenu />
        <Login />
      </nav>
      <Outlet />
      <Footer />
    </>
  );
}
