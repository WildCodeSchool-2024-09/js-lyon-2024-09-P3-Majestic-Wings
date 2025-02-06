import { Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface AirportProps {
  AirportData: {
    id: number;
    size: string;
    name: string;
    latitude: number;
    longitude: number;
    isocountry: string;
    isoregion: string;
    municipality: string;
    brand: string;
    model: string;
    image: string;
  };
}

const AirportMap = ({ AirportData }: AirportProps) => {
  // Personnalisation de l'icône pour les aéroports

  return (
    <Marker position={[AirportData.latitude, AirportData.longitude]}>
      <Popup>
        <div>
          <h3 className="font-bold">{AirportData.name}</h3>
          <p>Ville: {AirportData.municipality}</p>
          <p>Région: {AirportData.isoregion}</p>
          <p>
            Avion Disponible : {`${AirportData.brand} ${AirportData.model}`}
          </p>
        </div>
        <div className="plane-image">
          <img
            src={AirportData.image}
            alt={`${AirportData.brand} ${AirportData.model}`}
          />
        </div>
      </Popup>
    </Marker>
  );
};

export default AirportMap;
