import "./PageLogin.css";
import { Link } from "react-router-dom";
import password from "../../../public/lock.png";
import user from "../../../public/user.png";
const PageLogin = () => {
  return (
    <div className="login">
      <form className="form-all" action="">
        <div className="input_box">
          <img src={user} alt="identifiant" />
          <input type="text" placeholder="Username" required />
        </div>
        <div className="input_box">
          <img src={password} alt="password" />
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
