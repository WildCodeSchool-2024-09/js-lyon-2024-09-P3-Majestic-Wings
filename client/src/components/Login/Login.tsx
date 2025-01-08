import "./Login.css";
import { Link } from "react-router-dom";
import userInterfaceIcon from "../../../public/login.png";

function Login() {
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

export default Login;
