import type React from "react";
import { useState } from "react";
import "./Reservation.css";

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

  const today: string = new Date().toISOString().split("T")[0];

  const tomorrowDate: Date = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);

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
            min={today}
            name="departureDate"
            value={formData.departureDate}
            onChange={handleInputChange}
            required
          />
        </label>
        {/* 
        <label>
          Date de retour :
          <input
            type="date"
            min={tomorrow}
            name="departureDate"
            value={formData.departureDate}
            onChange={handleInputChange}
            required
          />
        </label> */}

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
      </form>
    </div>
  );
};

export default Reservation;
