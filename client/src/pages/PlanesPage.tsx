import { useEffect, useState } from "react";

import Planes from "../components/Planes/Planes";

interface PlanesProps {
  id: number;
  brand: string;
  model: string;
  image: string;
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
          <Planes PlanesData={display} key={display.id} />
        ))}
      </section>
    </>
  );
}
export default PlanesPage;
