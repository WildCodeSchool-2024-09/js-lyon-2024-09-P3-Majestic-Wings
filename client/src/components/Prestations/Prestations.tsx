import "./Prestations.css";

interface PrestationsProps {
  PrestationsData: {
    libelle: string;
    prestations_libelles: string;
    photo: string;
    plan: string;
  };
}

function Prestations({ PrestationsData }: PrestationsProps) {
  return (
    <>
      <div className="divPrestations">
        <h2>{PrestationsData.libelle}</h2>
        <img src={PrestationsData.photo} alt="" className="services" />
        <img src={PrestationsData.plan} alt="" className="plans" />
        <h2>{PrestationsData.prestations_libelles}</h2>
      </div>
    </>
  );
}

export default Prestations;
