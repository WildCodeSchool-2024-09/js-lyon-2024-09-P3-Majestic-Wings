import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import "./Button_Discover.css";
function Button_Discover() {
  const { auth } = useContext(AuthContext);
  return (
    <>
      <div className="button_discover">
        <h2 className="button_title">
          Plus qu'un simple vol, une véritable expérience
        </h2>
        {auth != null ? (
          <Link to="/reservation">
            <button type="button" className="explore-button">
              Découvrir nos offres
            </button>
          </Link>
        ) : (
          <Link to="/login">
            <button type="button" className="explore-button">
              Découvrir nos offres
            </button>
          </Link>
        )}
      </div>
    </>
  );
}
export default Button_Discover;
