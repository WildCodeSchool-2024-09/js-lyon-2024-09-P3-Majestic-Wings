import { useEffect, useState } from "react";

import Prestations from "../components/Prestations/Prestations";

interface PrestationsProps {
  libelle: string;
  prestations_libelles: string;
  photo: string;
  plan: string;
}

function CabinesPage() {
  const [prestations, setPrestations] = useState<PrestationsProps[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/prestations`)
      .then((res) => res.json())
      .then((inside) => {
        setPrestations(inside);
      });
  }, []);

  return (
    <>
      <section className="sectionService">
        {prestations.map((prestation) => (
          <Prestations
            PrestationsData={prestation}
            key={prestation.prestations_libelles}
          />
        ))}
      </section>
    </>
  );
}
export default CabinesPage;
