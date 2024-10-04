import React, { useEffect, useState } from "react";
import Doctor from "../Assets/doctor-picture.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Hero.css";

function Hero() {
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };
  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <p className="text-headline">❤️ La santé passe avant tout</p>
          <h2 className="text-title">
            Trouvez votre médecin et prenez rendez-vous
          </h2>
          <p className="text-descritpion">
            Parlez à des médecins en ligne et obtenez des conseils médicaux, des prescriptions en ligne,
            des renouvellements et des notes médicales en quelques minutes. Services de santé à la demande
            à portée de main.
          </p>
         
          <div className="text-stats">
            <div className="text-stats-container">
              <p>145k+</p>
              <p>Patients reçus</p>
            </div>

            <div className="text-stats-container">
              <p>50+</p>
              <p>Médecins experts</p>
            </div>

            <div className="text-stats-container">
              <p>10+</p>
              <p>Années d'expérience</p>
            </div>
          </div>
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src={Doctor} alt="Docteur" />
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;
