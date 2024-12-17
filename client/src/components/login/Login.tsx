import "./Login.css";
import userInterfaceIcon from "../../assets/images/login.png";

function Login() {
  return (
    <>
      <div className="loginButton">
        <img src={userInterfaceIcon} alt="Login button" />
      </div>
    </>
  );
}

export default Login;
