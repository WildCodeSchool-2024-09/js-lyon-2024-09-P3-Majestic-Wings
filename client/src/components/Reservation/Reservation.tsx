import type React from "react";
import { useState } from "react";
import "./Reservation.css";
import CreatePdf from "../../pages/FlightDetailsPDFPage";

const Reservation = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mail: "",
    phone: "",
    jetType: "",
    departureDate: "",
    returnDate: "",
    departureLocation: "",
    destination: "",
  });

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

    // TODO: Add logic to send data to the backend or API
  };

  const GeneratePDF = () => {
    CreatePdf();
  };

  return (
    <div className="reservationwrap">
      <h1>Réservation de jet</h1>
      <form onSubmit={handleSubmit} className="reservationForm">
        <label>
          Jet :
          <select
            name="jetType"
            value={formData.jetType}
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
            name="departureDate"
            value={formData.departureDate}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          Date de retour :
          <input
            type="date"
            name="returnDate"
            value={formData.returnDate}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Départ :
          <input
            type="text"
            name="departureLocation"
            value={formData.departureLocation}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          Arrivée :
          <input
            type="text"
            name="destination"
            value={formData.destination}
            onChange={handleInputChange}
            required
          />
        </label>

        <button type="submit">Soumettre la réservation</button>
        <button onClick={GeneratePDF} type="button" className="explore-button">
          Generer la Resservation sous Forme PDF
        </button>
      </form>
    </div>
  );
};

export default Reservation;
