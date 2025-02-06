import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Reservation.css";

type ReservationData = {
  model: string;
  reservation_date: string;
  departureAirport: string;
  arrivalAirport: string;
};

const Reservation = () => {
  const [formData, setFormData] = useState<ReservationData>({
    model: "",
    reservation_date: "",
    departureAirport: "",
    arrivalAirport: "",
  });

  const location = useLocation();

  useEffect(() => {
    // Extraction des paramètres de la query string
    const queryParams = new URLSearchParams(location.search);
    const departureAirport = queryParams.get("departureAirport") || "";
    const arrivalAirport = queryParams.get("arrivalAirport") || "";

    // Mise à jour automatique des aéroports grâce à l'URL
    setFormData((prevData) => ({
      ...prevData,
      departureAirport,
      arrivalAirport,
    }));
  }, [location]);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: Envoyer les données au backend si nécessaire
  };

  return (
    <div className="reservationwrap">
      <h1>Réservation de jet</h1>
      <form onSubmit={handleSubmit} className="reservationForm">
        <label>
          Jet :
          <select
            name="model"
            value={formData.model}
            onChange={handleInputChange}
            required
          >
            <option value="">Selectionner un jet</option>
            <option value="lightJet">Prestations</option>
            <option value="midsizeJet">Nombres de passagers</option>
          </select>
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

        <button type="submit">Soumettre la réservation</button>
      </form>
    </div>
  );
};

export default Reservation;
