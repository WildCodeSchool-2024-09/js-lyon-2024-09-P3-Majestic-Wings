import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FlightButton from "../../../public/takeoff.png";
import "./SearchBar.css";

interface AirportsProps {
  id: number;
  isocountry: string;
  name: string;
}

const SearchBar = () => {
  const [queries, setQuery] = useState<AirportsProps[]>([]);
  const [arrivalID, setarrivalID] = useState("");
  const [departureID, setDepartureID] = useState("");
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/airports`)
      .then((res) => res.json())
      .then((airports) => setQuery(airports));
  }, []);

  return (
    <>
      <h2 className="SearchTitle">Rechercher un vol</h2>

      <div className="SearchFull">
        <label className="LabelSearchBar">
          <select
            className="SearchBar"
            onChange={(e) => setDepartureID(e.target.value)}
            value={departureID || ""}
          >
            <option value="">De ...</option>
            {queries.map((query) => (
              <option value={query.isocountry} key={query.id}>
                {query.isocountry}
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
              <option value={query.name} key={query.id}>
                {query.name}
              </option>
            ))}
          </select>
          <Link to="/login">
            <button type="button" className="ValidationButton">
              <img
                src={FlightButton}
                alt="validation button"
                className="ValidationImage"
              />
            </button>
          </Link>
        </label>
      </div>
      <div className="FlightButton">
        <button type="button" className="FlyButton">
          Vol simple
        </button>
        <button type="button" className="FlyButton">
          Vol multiple
        </button>
      </div>
    </>
  );
};
export default SearchBar;
