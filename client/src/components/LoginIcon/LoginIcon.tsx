import "./LoginIcon.css";
import { Link } from "react-router-dom";
import userInterfaceIcon from "../../../public/avatar-noir.png";

function LoginIcon() {
  return (
    <>
      <Link to="/login">
        <div className="loginButton">
          <img src={userInterfaceIcon} alt="Login button" />
        </div>
      </Link>
    </>
  );
}

export default LoginIcon;
