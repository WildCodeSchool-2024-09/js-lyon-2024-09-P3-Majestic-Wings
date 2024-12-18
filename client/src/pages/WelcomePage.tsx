import Header from "../components/Header/Header";
import BurgerMenu from "../components/MenuBurger/MenuBurger";
import Our_Planes from "../components/Our_Planes/Our_Planes";
import Login from "../components/login/Login";

export default function WelcomePage() {
  return (
    <>
      <BurgerMenu />
      <Header />
      <Login />
      <Our_Planes />
    </>
  );
}
