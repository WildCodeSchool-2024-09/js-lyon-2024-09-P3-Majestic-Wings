import "./PageLogin.css";

import { useRef } from "react";
import type { FormEventHandler } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useOutletContext } from "react-router-dom";

import { toast } from "react-toastify";

import Password from "../../../public/lock.png";
import UserFace from "../../../public/user.png";

type User = {
  id: number;
  mail: string;
};

type Auth = {
  user: User;
  token: string;
};

const PageLogin = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const { setAuth } = useOutletContext() as {
    setAuth: (auth: Auth | null) => void;
  };

  const handleSubmit: FormEventHandler = async (event) => {
    event.preventDefault();

    try {
      // Appel à l'API pour demander une connexion
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/login`,
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            mail:
              /* rendering process ensures the ref is defined before the form is submitted */
              (emailRef.current as HTMLInputElement).value,
            hashed_password:
              /* rendering process ensures the ref is defined before the form is submitted */
              (passwordRef.current as HTMLInputElement).value,
          }),
        },
      );

      // Redirection vers la page de connexion si la création réussit
      if (response.status === 200) {
        const user = await response.json();

        setAuth(user);

        toast.info(`Bienvenue ${user.firstname} ${user.lastname}`);
        navigate("/");
      } else {
        // Log des détails de la réponse en cas d'échec
        console.info(response);
      }
    } catch (err) {
      // Log des erreurs possibles
      console.error(err);
    }
  };

  return (
    <div className="login">
      <form className="form-all" action="" onSubmit={handleSubmit}>
        <div className="input_box">
          <img src={UserFace} alt="identifiant" />
          <input
            type="email"
            placeholder="Identifiant ..."
            required
            ref={emailRef}
          />
        </div>
        <div className="input_box">
          <img src={Password} alt="password" />
          <input
            type="password"
            placeholder="Mot de passe ..."
            required
            ref={passwordRef}
          />
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
