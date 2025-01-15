import { useEffect, useState } from "react";

import Cabines from "../components/Cabines/Cabines";

interface CabinesProps {
  code: string;
  libelle: string;
  photo: string;
  plan: string;
}

function CabinesPage() {
  const [cabines, setCabines] = useState<CabinesProps[]>([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/cabines`)
      .then((res) => res.json())
      .then((inside) => {
        setCabines(inside);
      });
  }, []);

  return (
    <>
      <section className="sectionService">
        {cabines.map((cabine) => (
          <Cabines CabinesData={cabine} key={cabine.code} />
        ))}
      </section>
    </>
  );
}
export default CabinesPage;
