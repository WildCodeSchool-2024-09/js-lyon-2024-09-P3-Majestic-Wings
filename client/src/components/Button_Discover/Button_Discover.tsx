import { Link } from "react-router-dom";
import "./Button_discover.css";
function Button_Discover() {
  return (
    <>
      <div className="button_discover">
        <h2 className="button_title">
          Plus qu'un simple vol, une véritable expérience
        </h2>
        <Link to="/login">
          <button type="button" className="explore-button">
            Découvrir nos offres
          </button>
        </Link>
      </div>
    </>
  );
}
export default Button_Discover;
