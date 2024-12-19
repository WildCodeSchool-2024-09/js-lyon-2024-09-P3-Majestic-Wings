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
    fetch("http://localhost:3310/api/planes")
      .then((res) => res.json())
      .then((data) => setPlane(data));
  }, []);

  return (
    <>
      {plane.map((display) => (
        <Planes PlanesData={display} key={display.id} />
      ))}
    </>
  );
}
export default PlanesPage;
