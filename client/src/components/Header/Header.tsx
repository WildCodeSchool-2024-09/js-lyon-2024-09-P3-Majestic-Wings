import "./Header.css";
import Header_Image from "../../../public/Header_Image.png";

export default function Header() {
  return (
    <header className="header">
      <div className="cover">
        <img
          src={Header_Image}
          alt="couverture principale du site web, représentant un avion"
          className="header-image"
        />
      </div>
    </header>
  );
}
