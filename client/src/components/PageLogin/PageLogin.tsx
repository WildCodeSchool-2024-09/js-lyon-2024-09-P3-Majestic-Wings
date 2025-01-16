import "./PageLogin.css";
import { Link } from "react-router-dom";
import Password from "../../../public/lock.png";
import User from "../../../public/user.png";
const PageLogin = () => {
  return (
    <div className="login">
      <form className="form-all" action="">
        <div className="input_box">
          <img src={User} alt="identifiant" />
          <input type="email" placeholder="Identifiant ..." required />
        </div>
        <div className="input_box">
          <img src={Password} alt="password" />
          <input type="password" placeholder="Mot de passe ..." required />
        </div>
        <div className="remember_forgot">
          <label>
            <input type="checkbox" />
            Mémorisez vos identifiants
          </label>
          <br />
          <Link to="/login/registration">
            <p>Pas de compte ? Inscrivez-vous</p>
          </Link>

          <Link to="/">
            {" "}
            <p>Mot de passe oublié ? </p>
          </Link>
          <button type="submit" className="explore-button">
            Se connecter
          </button>
        </div>
      </form>
    </div>
  );
};
export default PageLogin;
