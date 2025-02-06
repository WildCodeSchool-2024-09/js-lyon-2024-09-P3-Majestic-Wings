import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <Link to="/cgv">
        <p>Mentions légales et CGV</p>
      </Link>
    </footer>
  );
}

export default Footer;
