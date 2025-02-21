import { useEffect, useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Airport from "../../public/aeroport vide.jpg";
import AuthContext from "../Context/AuthContext";
import Planes from "../components/Planes/Planes";

type PlanesProps = {
  id: number;
  brand: string;
  model: string;
  image: string;
  capacity: number;
  autonomy: number;
  speed: number;
  luggages: number;
  airport_id: number;
};

function PlanesPage() {
  const navigate = useNavigate();

  const { auth } = useContext(AuthContext);
  const [plane, setPlane] = useState<PlanesProps[]>([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/planes`, {
      headers: {
        "Content-Type": "application/json",
        /* conditional rendering ensures auth is not null */
        Authorization: `Bearer ${auth?.token}`, // Inclusion du jeton JWT
      },
    })
      .then((res) => {
        if (res.status === 401) {
          toast.info("Merci de vous connecter pour accèder à cette page");
          navigate("/login");
          return;
        }
        return res.json();

        // Faire une logique si status 401 on renvois une erreur, sinon on renvoi vers navigate
      })
      .then((data) => {
        setPlane(data);
      });
  }, [auth, navigate]);

  return (
    <>
      {plane.length > 0 ? (
        <section className="sectionPlane">
          {plane.map((display) => (
            <Planes PlanesData={display} key={display.id} />
          ))}
        </section>
      ) : (
        <div className="Nodisplay">
          <p>
            Nous n'avons malheureusement pas d'avions à afficher à l'heure
            actuelle.Cette section sera bientot mise à jour.
          </p>
          <img
            src={Airport}
            alt="Représentation d'un aéroport vide"
            className="Airport"
          />
        </div>
      )}
    </>
  );
}

export default PlanesPage;
