import { Link } from "react-router-dom";
import "./Button_Discover.css";
import CreatePdf from "../../pages/FlightDetailsPDFPage";

function Button_Discover() {
  const GeneratePDF = () => {
    CreatePdf();
  };

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
      <div className="button_pdf">
        <h2 className="button_pdf">Lancer le pdf</h2>
        <button onClick={GeneratePDF} type="button" className="explore-button">
          Generer la Reservation sous Forme PDF
        </button>
      </div>
    </>
  );
}
export default Button_Discover;
