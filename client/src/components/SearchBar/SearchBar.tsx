import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FlightButton from "../../../public/takeoff.png";
import "./SearchBar.css";

interface AirportProps {
  id: number;
  isocountry: string;
  name: string;
}

interface FlightDetails {
  departureCountry: string;
  departureAirport: string;
  arrivalCountry: string;
  arrivalAirport: string;
}
const generateKey = (pre: number) => {
  return `${pre}_${new Date().getTime()}`;
};
const Dropdown = ({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}) => (
  <label>
    <select className="SearchBar" value={value} onChange={onChange}>
      <option value="">{label}</option>
      {options.map((option, index) => (
        <option key={generateKey(index)} value={option}>
          {option}
        </option>
      ))}
    </select>
  </label>
);

const SearchBar = () => {
  const [airports, setAirports] = useState<AirportProps[]>([]);
  const [flightDetails, setFlightDetails] = useState<FlightDetails>({
    departureCountry: "",
    departureAirport: "",
    arrivalCountry: "",
    arrivalAirport: "",
  });

  const navigate = useNavigate();

  const handleInputChange =
    (key: keyof FlightDetails) =>
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setFlightDetails({
        ...flightDetails,
        [key]: event.target.value,
      });
    };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/airports`)
      .then((res) => res.json())
      .then((data) => setAirports(data));
  }, []);

  const getAirportsByCountry = (country: string) =>
    airports
      .filter((airport) => airport.isocountry === country)
      .map((airport) => airport.name);

  const handleSubmit = () => {
    if (!flightDetails.departureAirport || !flightDetails.arrivalAirport) {
      alert("Veuillez sélectionner un aéroport de départ et d'arrivée.");
      return;
    }

    // Navigation vers la page de réservation avec les données en query string
    navigate(
      `/reservation?departureAirport=${encodeURIComponent(
        flightDetails.departureAirport,
      )}&arrivalAirport=${encodeURIComponent(flightDetails.arrivalAirport)}`,
    );
  };

  return (
    <>
      <h2 className="SearchTitle">Rechercher un vol</h2>

      <div className="SearchFull">
        <Dropdown
          label="Pays de départ ..."
          options={[
            "Allemagne",
            "Autriche",
            "Belgique",
            "Espagne",
            "Finland",
            "France",
            "Italie",
            "Pays-Bas",
            "Portugal",
            "Royaume-Uni",
            "Russie",
            "Suisse",
          ]}
          value={flightDetails.departureCountry}
          onChange={handleInputChange("departureCountry")}
        />
        <Dropdown
          label="Aéroport de départ ..."
          options={getAirportsByCountry(flightDetails.departureCountry)}
          value={flightDetails.departureAirport}
          onChange={handleInputChange("departureAirport")}
        />
        <Dropdown
          label="Pays d'arrivée ..."
          options={[
            "Allemagne",
            "Autriche",
            "Belgique",
            "Espagne",
            "Finland",
            "France",
            "Italie",
            "Pays-Bas",
            "Portugal",
            "Royaume-Uni",
            "Russie",
            "Suisse",
          ]}
          value={flightDetails.arrivalCountry}
          onChange={handleInputChange("arrivalCountry")}
        />
        <Dropdown
          label="Aéroport d'arrivée ..."
          options={getAirportsByCountry(flightDetails.arrivalCountry)}
          value={flightDetails.arrivalAirport}
          onChange={handleInputChange("arrivalAirport")}
        />

        <button
          type="button"
          className="ValidationButton"
          onClick={handleSubmit}
        >
          <img
            src={FlightButton}
            alt="validation button"
            className="ValidationImage"
          />
        </button>
      </div>
    </>
  );
};

export default SearchBar;
