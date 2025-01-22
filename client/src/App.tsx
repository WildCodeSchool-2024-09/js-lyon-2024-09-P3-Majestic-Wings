import { Outlet } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
// import LoginIcon from "./components/LoginIcon/LoginIcon";
// import BurgerMenu from "./components/MenuBurger/MenuBurger";
import NavBar from "./components/NavBar/NavBar";

import { Bounce, ToastContainer } from "react-toastify";

type User = {
  id: number;
  mail: string;
};
type Auth = {
  user: User;
  token: string;
};

export default function App() {
  const [auth, setAuth] = useState(null as Auth | null);
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
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <Outlet context={{ auth, setAuth }} />
      <Footer />
    </>
  );
}
