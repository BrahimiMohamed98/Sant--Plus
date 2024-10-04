import React from "react";
import Doctor from "../Assets/doctor-group.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Groupe de médecins" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>À propos de nous</span>
        </h3>
        <p className="about-description">
          Bienvenue chez Santé Plus, votre partenaire de confiance pour des soins de santé
          accessibles et personnalisés. Nos médecins experts offrent des consultations en ligne
          et des services spécialisés, en donnant la priorité à votre bien-être. Rejoignez-nous
          dans ce voyage vers une meilleure santé.
        </p>

        <h4 className="about-text-title">Vos Solutions</h4>

        <SolutionStep
          title="Choisissez un spécialiste"
          description="Trouvez votre spécialiste parfait et réservez facilement avec Santé Plus. Des médecins experts qui priorisent votre santé en offrant des soins personnalisés."
        />

        <SolutionStep
          title="Prenez un rendez-vous"
          description="Choisissez la date et l'heure qui vous conviennent le mieux, et laissez notre équipe dévouée de professionnels de la santé assurer votre bien-être avec des soins personnalisés."
        />

        <SolutionStep
          title="Obtenez vos solutions"
          description="Nos médecins et spécialistes expérimentés sont là pour fournir des conseils experts et des plans de traitement personnalisés, vous aidant à atteindre votre meilleure santé possible."
        />
      </div>
    </div>
  );
}

export default About;
