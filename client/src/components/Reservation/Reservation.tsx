import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import "./Reservation.css";
import { toast } from "react-toastify";

type ReservationData = {
  size: string;
  reservation_date: string;
  departureAirport: string;
  arrivalAirport: string;
  planeId: string;
};

interface PlaneProps {
  id: number;
  brand: string;
  model: string;
}

const Reservation = () => {
  const { auth } = useContext(AuthContext);
  const [planes, setPlanes] = useState<PlaneProps[]>([]);
  const [formData, setFormData] = useState<ReservationData>({
    size: "",
    reservation_date: "",
    departureAirport: "",
    arrivalAirport: "",
    planeId: "",
  });

  const location = useLocation();

  useEffect(() => {
    // Extraction des paramètres de la query string
    const queryParams = new URLSearchParams(location.search);
    const departureAirport = queryParams.get("departureAirport") || "";
    const arrivalAirport = queryParams.get("arrivalAirport") || "";

    setFormData((prevData) => ({
      ...prevData,
      departureAirport,
      arrivalAirport,
    }));
  }, [location]);

  useEffect(() => {
    if (
      formData.size !== "" &&
      formData.reservation_date !== "" &&
      formData.departureAirport !== "" &&
      formData.arrivalAirport !== ""
    ) {
      fetch(
        `${import.meta.env.VITE_API_URL}/api/get-planes-resa?size=${
          formData.size
        }`,
      )
        .then((res) => res.json())
        .then((data) => setPlanes(data));
    }
  }, [formData]);

  const today: string = new Date().toISOString().split("T")[0];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Appel à l'API pour demander une connexion
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/reservation`,
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth?.token}`, // Inclusion du jeton JWT
          },
          body: JSON.stringify(formData),
        },
      );

      // Redirection vers la page de connexion si la création réussit
      if (response.status === 201) {
        toast.success("Votre réservation a bien été enregistré");
        // navigate("/");
      } else {
        // Log des détails de la réponse en cas d'échec
        toast.error("Une erreur");
        console.info(response);
      }
    } catch (err) {
      // Log des erreurs possibles
      console.error(err);
    }
  };

  return (
    <div className="reservationwrap">
      <h1>Réservation de jet</h1>
      <form onSubmit={handleSubmit} className="reservationForm">
        <label>
          Départ :
          <input
            type="text"
            name="departureAirport"
            value={formData.departureAirport}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          Arrivée :
          <input
            type="text"
            name="arrivalAirport"
            value={formData.arrivalAirport}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Date de départ :
          <input
            type="date"
            min={today}
            name="reservation_date"
            value={formData.reservation_date}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          Jet :
          <select
            name="size"
            value={formData.size}
            onChange={handleInputChange}
            required
          >
            <option value="">Selectionner un jet</option>
            <option value="Petit">Petit</option>
            <option value="Moyen">Moyen</option>
            <option value="Grand">Grand</option>
          </select>
        </label>
        {planes && planes.length > 0 ? (
          <div>
            <label>
              Avions disponibles
              <select
                name="planeId"
                value={formData.planeId}
                onChange={handleInputChange}
                required
              >
                {planes.map((selection) => (
                  <option value={selection.id} key={selection.id}>
                    {selection.model} {selection.brand}
                  </option>
                ))}
              </select>
            </label>
          </div>
        ) : (
          <p>Aucun avions disponible</p>
        )}

        <button type="submit" onClick={handleSubmit}>
          Soumettre la réservation
        </button>
      </form>
    </div>
  );
};

export default Reservation;
