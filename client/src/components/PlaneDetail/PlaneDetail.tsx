import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PlaneDetail.css";

interface PlaneProps {
  brand: string;
  model: string;
  capacity: number;
  autonomy: number;
  speed: number;
  luggages: number;
  image: string;
  photo: string;
  libelle: string;
  plan: string;
  cabine_prestations: string;
  airports_names: string;
  isocountry: string;
}

function PlaneDetail() {
  const { id } = useParams();
  const [planeDetail, setPlaneDetail] = useState<PlaneProps | null>(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/planes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPlaneDetail(data);
      });
  }, [id]);

  if (!planeDetail)
    return (
      <div>
        <h1>"Probleme Affichage de données - Aucun Avions "</h1>
      </div>
    );

  return (
    <div className="plane-detail">
      <div className="plane-photos">
        <h1>
          {planeDetail.brand} {planeDetail.model}
        </h1>
        <img
          src={planeDetail.image}
          alt={`${planeDetail.brand} ${planeDetail.model}`}
        />
        <img
          src={planeDetail.photo}
          alt={`${planeDetail.brand} ${planeDetail.model}`}
        />
        <img
          src={planeDetail.plan}
          alt={`${planeDetail.brand} ${planeDetail.model}`}
        />
      </div>
      <div className="plane-caract">
        <ul>
          <li> libelle : {planeDetail.libelle}</li>
          <li> Prestations : {planeDetail.cabine_prestations}</li>
          <li> Autonomy Miles : {planeDetail.autonomy}</li>
          <li> capacity Pers. : {planeDetail.capacity}</li>
          <li> Speed MPH : {planeDetail.speed}</li>
          <li> luggages nb : {planeDetail.luggages}</li>
          <li> airport Names : {planeDetail.airports_names}</li>
          <li> Country : {planeDetail.isocountry}</li>
        </ul>
      </div>
    </div>
  );
}

export default PlaneDetail;
