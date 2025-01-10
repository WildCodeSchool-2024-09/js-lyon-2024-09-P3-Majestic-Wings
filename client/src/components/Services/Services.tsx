import "./Services.css";

interface ServicesProps {
  ServicesData: {
    service_code: string;
    service_libelle: string;
    service_photo: string;
    service_plan: string;
  };
}

function Services({ ServicesData }: ServicesProps) {
  return (
    <>
      <section className="sectionServices">
        <div className="divServices">
          <h3>{ServicesData.service_libelle}</h3>
          <img
            className="services"
            src={ServicesData.service_photo}
            alt={ServicesData.service_libelle}
          />
          <img
            className="plans"
            src={ServicesData.service_plan}
            alt={ServicesData.service_libelle}
          />
        </div>
      </section>
    </>
  );
}

export default Services;
