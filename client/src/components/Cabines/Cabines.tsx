import "./Cabines.css";

interface CabinesProps {
  CabinesData: {
    code: string;
    libelle: string;
    photo: string;
    plan: string;
  };
}

function Cabines({ CabinesData }: CabinesProps) {
  return (
    <>
      <div className="divServices">
        <h2>{CabinesData.libelle}</h2>
        <img
          className="services"
          src={CabinesData.photo}
          alt={CabinesData.libelle}
        />
        <img
          className="plans"
          src={CabinesData.plan}
          alt={CabinesData.libelle}
        />
      </div>
    </>
  );
}

export default Cabines;
