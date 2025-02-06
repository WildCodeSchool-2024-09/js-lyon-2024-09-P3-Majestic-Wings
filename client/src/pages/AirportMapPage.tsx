import { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";

import AirportMap from "../components/AirportMap/AirportMap.";
import "leaflet/dist/leaflet.css";
import "../../src/components/AirportMap/AirportMap.css";
interface AirportProps {
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
}

function AirportMapPage() {
  const [position, setposition] = useState<AirportProps[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/airport`)
      .then((res) => res.json())
      .then((data) => setposition(data));
  }, []);

  return (
    <>
      <div className="w-full">
        <MapContainer
          center={[46.603354, 1.888334]} // Centre de la France
          zoom={6}
          scrollWheelZoom={false}
          className="w-full h-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {position.map((pos) => (
            <AirportMap AirportData={pos} key={pos.id} />
          ))}
        </MapContainer>
      </div>
    </>
  );
}

export default AirportMapPage;
