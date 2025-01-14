import { Outlet } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
// import LoginIcon from "./components/LoginIcon/LoginIcon";
// import BurgerMenu from "./components/MenuBurger/MenuBurger";
import NavBar from "./components/NavBar/NavBar";

export default function App() {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPos(window.scrollY);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, scrollPos);
  }, [scrollPos]);

  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}
