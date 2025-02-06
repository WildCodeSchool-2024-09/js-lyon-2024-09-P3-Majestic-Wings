import { useEffect, useState } from "react";
import "./Reservation.css";
import type { ReactNode } from "react";

type ReservationData = {
  id: number;
  name: string;
  isocountry: string;
};
interface RegistrationFormData {
  defaultValue: ReservationData;
  children: ReactNode;
  onSubmit: (user: ReservationData) => void;
}

const Reservation = ({
  defaultValue,
  children,
  onSubmit,
}: RegistrationFormData) => {
  const [queries, setQuery] = useState<ReservationData[]>([]);
  const [arrivalID, setarrivalID] = useState("");
  const [departureID, setDepartureID] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/airports`)
      .then((res) => res.json())
      .then((airports) => setQuery(airports));
  }, []);

  return (
    <div className="reservationwrap">
      <h1>Réservation de jet</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const id = formData.get("id") as unknown as number;
          const name = formData.get("name") as string;
          const isocountry = formData.get("isocountry") as string;
          onSubmit({
            id,
            name,
            isocountry,
          });
        }}
        className="form-all"
        action=""
      >
        <label>
          Jet :
          <select name="jetType" value="" required>
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
            value={defaultValue.isocountry}
            required
          />
        </label>

        <select
          className="SearchBar"
          onChange={(e) => setDepartureID(e.target.value)}
          value={departureID || ""}
        >
          <option value="">De ...</option>
          {queries.map((query) => (
            <option value={query.isocountry} key={query.id}>
              {defaultValue.isocountry}
            </option>
          ))}
        </select>
        <select
          className="SearchBar"
          onChange={(e) => setarrivalID(e.target.value)}
          value={arrivalID || ""}
        >
          <option value="">Vers ...</option>
          {queries.map((query) => (
            <option value={query.isocountry} key={query.id}>
              {defaultValue.isocountry}
            </option>
          ))}
        </select>

        <button type="submit">{children}</button>
      </form>
    </div>
  );
};

export default Reservation;
