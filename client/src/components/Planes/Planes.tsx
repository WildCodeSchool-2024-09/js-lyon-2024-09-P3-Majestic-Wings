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
      <div className="divPlane">
        <img className="plane" src={PlanesData.image} alt={PlanesData.brand} />
        <h3>
          {PlanesData.brand} {PlanesData.model}
        </h3>
      </div>
    </>
  );
}

export default Planes;
