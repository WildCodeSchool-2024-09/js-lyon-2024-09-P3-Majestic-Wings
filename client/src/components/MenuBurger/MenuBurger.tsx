import { useState } from "react";
import "./MenuBurger.css";
import { Link } from "react-router-dom";
import CloseMenu from "../../../public/close.png";
import OpenMenu from "../../../public/menu-bar.png";
const BurgerMenu = () => {
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
    </>
  );
};

export default BurgerMenu;
