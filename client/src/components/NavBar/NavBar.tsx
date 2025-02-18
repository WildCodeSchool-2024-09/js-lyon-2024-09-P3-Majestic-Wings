import { useEffect, useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { toast } from "react-toastify";
import CloseMenu from "../../../public/Croix.png";
import OpenMenu from "../../../public/barre-blanc.png";
import AuthContext from "../../Context/AuthContext";

const NavBar = () => {
  const { auth, setAuth } = useContext(AuthContext);

  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPos(window.scrollY);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, scrollPos);
  }, [scrollPos]);

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleOpeningMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const handeCloseMenu = () => {
    setIsOpenMenu(false);
  };

  const navigation = [
    { id: 1, url: "/", name: "Accueil" },
    { id: 2, url: "/planes", name: "Nos avions" },
    { id: 3, url: "/cabines", name: "Nos prestations" },
    { id: 4, url: "/about", name: "A propos" },
  ];

  return (
    <>
      <nav className={window.scrollY === 0 ? "NavBarTop" : "NavBarScrolled"}>
        <button type="button" onClick={handleOpeningMenu} className="menu_btn">
          <img
            className="menu_icon"
            src={isOpenMenu === false ? OpenMenu : CloseMenu}
            alt=""
          />
        </button>
        <div
          className={`opened_menu_container ${
            isOpenMenu === true ? "right_to_left display_flex" : "display_none"
          }`}
        >
          <ul>
            {navigation.map((link) => (
              <li key={link.id} className="list_element_burger">
                <Link
                  to={link.url}
                  onClick={handeCloseMenu}
                  className="mobile_link"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            {auth !== undefined ? (
              <>
                <li className="list_element_burger">
                  <Link className="mobile_link" to="/profile/edit-account">
                    Mon profil
                  </Link>
                </li>
                <li className="list_element_burger">
                  <Link
                    className="mobile_link"
                    to="/"
                    onClick={() => {
                      setAuth(undefined);
                      toast.info("Vous êtes déconnecté");
                    }}
                  >
                    Se déconnecter
                  </Link>
                </li>
              </>
            ) : (
              <li className="list_element_burger">
                <Link to="/login" className="mobile_link">
                  Se connecter
                </Link>
              </li>
            )}
          </ul>
        </div>
        <div className={window.scrollY === 0 ? "LogoTop" : "Logoscrolled"}>
          <img src="" alt="" className="logo" />
        </div>

        {auth === undefined ? (
          <div className="loginButton">
            <img src="" alt="" className="loginface" />
          </div>
        ) : (
          <div
            className={window.scrollY === 0 ? "ProfileTop" : "ProfileScrolled"}
          >
            <Link to={"/profile/edit-account"}>
              <img src="" alt="" className="loginface" />
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default NavBar;
