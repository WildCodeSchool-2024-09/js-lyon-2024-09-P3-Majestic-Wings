import "./Header.css";
import Header_Image from "../../../public/Header_Image.png";

export default function Header() {
  return (
    <header className="header">
      <div className="cover"></div>
      <img
        src={Header_Image}
        alt="Image principale du site web, représentant un avion"
        className="header-image"
      />
    </header>
  );
}
