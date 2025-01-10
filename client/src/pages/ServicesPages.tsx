import { useEffect, useState } from "react";

import Services from "../components/Services/Services";

interface ServicesProps {
  service_code: string;
  service_libelle: string;
  service_photo: string;
  service_plan: string;
}

function ServicesPage() {
  const [services, setServices] = useState<ServicesProps[]>([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/services`)
      .then((res) => res.json())
      .then((prestation) => setServices(prestation));
  }, []);

  return (
    <>
      <section className="sectionService">
        {services.map((service) => (
          <Services ServicesData={service} key={service.service_code} />
        ))}
      </section>
    </>
  );
}
export default ServicesPage;
