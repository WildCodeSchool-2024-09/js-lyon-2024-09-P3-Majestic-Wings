import "./Footer.css";
import { Link } from "react-router-dom";
import facebook from "../../../public/facebook.png";
import instagrame from "../../../public/instagram.png";
import linkedin from "../../../public/linkedin.png";
import twiter from "../../../public/reseaux-sociaux.png";
import watsapp from "../../../public/whatsapp.png";

function Footer() {
  return (
    <footer className="footer">
      <p>Nous suivre</p>
      <div>
        <Link to="/">
          <img src={facebook} alt="logo_facebook" width={20} />
        </Link>
      </div>
      <div>
        {" "}
        <Link to="/">
          <img src={instagrame} alt="logo_instagrame" width={20} />{" "}
        </Link>
      </div>
      <div>
        <Link to="/">
          <img src={linkedin} alt="logo_linkedin" width={20} />{" "}
        </Link>
      </div>
      <div>
        <Link to="/">
          <img src={watsapp} alt="logo_watsapp" width={20} />
        </Link>
      </div>
      <div>
        <Link to="/">
          <img src={twiter} alt="logo_twiter" width={20} />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
