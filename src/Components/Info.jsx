import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse, faTruckMedical, faTooth } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>Ce que nous faisons</span>
        </h3>
        <p className="info-description">
          Nous apportons des soins de santé à votre convenance, en offrant une gamme complète
          de services médicaux à la demande adaptés à vos besoins. Notre plateforme vous permet
          de vous connecter avec des médecins en ligne expérimentés qui fournissent des conseils
          médicaux experts, délivrent des prescriptions en ligne et offrent des renouvellements rapides
          chaque fois que vous en avez besoin.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Soins d'urgence"
          description="Notre service de soins d'urgence est conçu pour être votre soutien fiable
            dans les situations critiques. Qu'il s'agisse d'une maladie soudaine, d'une blessure ou
            de toute préoccupation médicale nécessitant une attention immédiate, notre équipe de
            professionnels de la santé dédiés est disponible 24h/24 et 7j/7 pour fournir
            des soins rapides et efficaces."
          icon={faTruckMedical}
        />

        <InformationCard
          title="Maladie cardiaque"
          description="Notre équipe de cardiologues expérimentés et d'experts médicaux utilise
            une technologie de pointe pour évaluer votre santé cardiovasculaire et
            concevoir des plans de traitement personnalisés. Des dépistages complets
            aux interventions avancées, nous nous engageons à vous aider à maintenir
            un cœur en bonne santé et à mener une vie épanouie."
          icon={faHeartPulse}
        />

        <InformationCard
          title="Soins dentaires"
          description="Souriez en toute confiance car nos services de soins dentaires répondent à tous vos
            besoins en matière de santé bucco-dentaire. Nos dentistes qualifiés offrent une large gamme de
            traitements, des examens et nettoyages de routine aux procédures esthétiques
            et aux traitements restaurateurs."
          icon={faTooth}
        />
      </div>
    </div>
  );
}

export default Info;
