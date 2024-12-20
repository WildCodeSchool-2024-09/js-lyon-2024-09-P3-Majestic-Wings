import "./Planes.css";

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
      <section className="sectionPlane">
        <div className="divPlane">
          <img
            className="plane"
            src={PlanesData.image}
            alt={PlanesData.brand}
          />
          <h3>
            {PlanesData.brand} {PlanesData.model}
          </h3>
        </div>
      </section>
    </>
  );
}

export default Planes;
