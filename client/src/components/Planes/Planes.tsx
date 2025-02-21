import "./Planes.css";
import { Link } from "react-router-dom";

interface PlanesProps {
  PlanesData: {
    id: number;
    brand: string;
    model: string;
    image: string;
  };
}

function Planes({ PlanesData }: PlanesProps) {
  return (
    <>
      <div className="divPlane">
        <Link to={`/planes/${PlanesData.id}`}>
          <img
            className="plane"
            src={PlanesData.image}
            alt={PlanesData.brand}
          />
        </Link>
        <h3>
          {PlanesData.brand} {PlanesData.model}
        </h3>
      </div>
    </>
  );
}

export default Planes;
