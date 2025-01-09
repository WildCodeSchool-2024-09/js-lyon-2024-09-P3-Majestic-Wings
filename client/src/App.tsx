import { Outlet } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import LoginIcon from "./components/LoginIcon/LoginIcon";
import BurgerMenu from "./components/MenuBurger/MenuBurger";

export default function App() {
  const [scrollPos, setScrollPos] = useState(0);

  // Effect to update scrollPos state when the user scrolls
  useEffect(() => {
    const handleScroll = () => setScrollPos(window.scrollY);

    // Adding scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Effect to restore scroll position on component mount
  useEffect(() => {
    // Scroll to the saved position
    window.scrollTo(0, scrollPos);
  }, [scrollPos]);

  return (
    <>
      <nav className={window.scrollY === 0 ? "NavBarTop" : "NavBarScrolled"}>
        <BurgerMenu />
        <LoginIcon />
      </nav>
      <Outlet />
      <Footer />
    </>
  );
}
