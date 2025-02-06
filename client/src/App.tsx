import { Outlet } from "react-router-dom";
import "./App.css";

import Footer from "./components/Footer/Footer";
// import LoginIcon from "./components/LoginIcon/LoginIcon";
// import BurgerMenu from "./components/MenuBurger/MenuBurger";
import NavBar from "./components/NavBar/NavBar";

import { Bounce, ToastContainer } from "react-toastify";

export default function App() {
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
      <Outlet />
      <Footer />
    </>
  );
}
