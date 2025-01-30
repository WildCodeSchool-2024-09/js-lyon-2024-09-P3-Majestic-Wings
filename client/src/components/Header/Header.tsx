import "./Header.css";
import Header_Image from "../../../public/Header_Image.png";

export default function Header() {
  return (
    <header className="header">
      <img
        src={Header_Image}
        alt="Poster principal du site web, représentant un avion"
        className="header-image"
      />
    </header>
  );
}
