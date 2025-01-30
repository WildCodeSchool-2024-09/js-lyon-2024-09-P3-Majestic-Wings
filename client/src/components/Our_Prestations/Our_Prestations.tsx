import { useEffect, useState } from "react";
import "./Our_prestations.css";
import { Link } from "react-router-dom";

const Our_Prestations = () => {
  const images = [
    "../../../public/Prestations_1.png",
    "../../../public/Prestations_1.png",
    "../../../public/Prestations_1.png",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change d'image toutes les 5 secondes

    return () => clearInterval(interval); // Évite les fuites mémoire
  }, []);

  return (
    <section className="our-prestations">
      <div className="text-content">
        <h2 className="section-title">Explorez l'Excellence</h2>
        <p className="section-description">
          Laissez-vous séduire par nos services de vol haut de gamme, conçus
          pour offrir une expérience incomparable. Profitez d’une discrétion
          absolue, d’un confort ultime et d’un service adapté à vos besoins.
          Prenez votre envol avec classe et distinction.
        </p>
        <Link to="/cabines">
          <button type="button" className="explore-button">
            Découvrir nos services
          </button>
        </Link>
      </div>
      <div className="image-slider">
        <img
          src={images[currentImage]}
          alt={`Service ${currentImage + 1}`}
          className="slider-image"
        />
      </div>
    </section>
  );
};

export default Our_Prestations;
