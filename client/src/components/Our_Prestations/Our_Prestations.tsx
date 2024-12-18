import { useEffect, useState } from "react";
import "./Inverted_Section.css";

const Our_Prestations = () => {
  const images = [
    "../../../public/Jet_privé_2.png",
    "../../../public/Jet_privé_3.png",
    "../../../public/Jet_privé_4.png",
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
        <button type="button" className="explore-button">
          Découvrir nos services
        </button>
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
