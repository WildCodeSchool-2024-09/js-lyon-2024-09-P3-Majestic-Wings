import Header from "../components/Header/Header";
import BurgerMenu from "../components/MenuBurger/MenuBurger";
import Our_Planes from "../components/Our_Planes/Our_Planes";
import Our_Prestations from "../components/Our_Prestations/Our_Prestations";
import Login from "../components/login/Login";

export default function WelcomePage() {
  return (
    <>
      <nav className="NavBar">
        <BurgerMenu />
        <Login />
      </nav>
      <Header />
      <Our_Planes />
      <Our_Prestations />
    </>
  );
}
