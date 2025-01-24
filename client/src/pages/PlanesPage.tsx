import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Planes from "../components/Planes/Planes";

interface PlanesProps {
  id: number;
  brand: string;
  model: string;
  image: string;
  capacity: number;
  autonomy: number;
  speed: number;
  luggages: number;
  airport_id: number;
}

function PlanesPage() {
  const [plane, setPlane] = useState<PlanesProps[]>([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/planes`)
      .then((res) => res.json())
      .then((data) => setPlane(data));
  }, []);

  return (
    <>
      <section className="sectionPlane">
        {plane.map((display) => (
          <Link to={`/planes/${display.id}`} key={display.id}>
            <Planes PlanesData={display} />
          </Link>
        ))}
      </section>
    </>
  );
}
export default PlanesPage;
