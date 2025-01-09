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
          <input type="text" placeholder="Username" required />
        </div>
        <div className="input_box">
          <img src={Password} alt="password" />
          <input type="password" placeholder="Password" required />
        </div>
        <div className="remember_forgot">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <br />
          <Link to="/">
            {" "}
            <p>Forgot password?</p>
          </Link>
        </div>
        <button type="submit">Sign me</button>
      </form>
    </div>
  );
};
export default PageLogin;
