import { useState } from "react";
import "./MenuBurger.css";
import { Link } from "react-router-dom";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="burger-menu">
      <div
        className={`burger-icon ${isOpen ? "open" : ""}`}
        onKeyDown={toggleMenu}
        onClick={toggleMenu}
      >
        <div className="burgerbarre" />
        <div className="burgerbarre" />
        <div className="burgerbarre" />
      </div>

      <nav className={`menu ${isOpen ? "menu-open" : ""}`}>
        <ul>
          <Link to="/">
            <li>Accueil</li>
          </Link>
          <li>À propos</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default BurgerMenu;
