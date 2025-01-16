import { useEffect, useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import userInterfaceIcon from "../../../public/avatar-noir.png";
import CloseMenu from "../../../public/close.png";
import OpenMenu from "../../../public/menu-bar.png";

const NavBar = () => {
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
    { id: 2, url: "/planes", name: "Avions" },
    { id: 3, url: "/login", name: "Se connecter" },
    { id: 4, url: "/backoffice/action", name: "Contact" },
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
          </ul>
        </div>
        <div className={window.scrollY === 0 ? "LogoTop" : "Logoscrolled"}>
          <img src="" alt="" className="logo" />
        </div>
        <Link to="/login">
          <div className="loginButton">
            <img src={userInterfaceIcon} alt="Login button" />
          </div>
        </Link>
      </nav>
    </>
  );
};

export default NavBar;
