import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Our_Planes.css";

const Our_Planes = () => {
  const images = [
    "../../../public/Jet_privé_1.png",
    "../../../public/Jet_privé_1.png",
    "../../../public/Jet_privé_1.png",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // ça c'est pour changer de photo toutes les 5 sec, il faudar en trouver 2-3 pas mal

    return () => clearInterval(interval); // c'est pour éviter les fuites de mémoire, à voir après les tests si on peut le dégager
  }, []);

  return (
    <section className="our-planes">
      <div className="image-slider">
        <img
          src={images[currentImage]}
          alt={`Jet privé ${currentImage + 1}`}
          className="slider-image"
        />
      </div>
      <div className="text-plane">
        <h2 className="section-title">Nos avions</h2>
        <p className="section-description">
          Découvrez notre flotte exceptionnelle d’avions privés, soigneusement
          sélectionnés pour offrir le nec plus ultra en matière de confort, de
          performance et de style. Que vous souhaitiez voyager pour affaires ou
          pour le plaisir, chaque détail de nos jets est conçu pour transformer
          votre vol en une expérience inoubliable.
        </p>
        <Link to="/planes">
          <button type="button" className="explore-button">
            Explorer la flotte
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Our_Planes;
