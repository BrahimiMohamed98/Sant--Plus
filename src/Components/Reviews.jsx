// Reviews.js
import React from "react";
import "../Styles/Reviews.css";
import CardReview from "./CardReview";
import Mycxt from './Context';

const Mycxt1 = [
  {
    "name": "Fatima Benali",
    "location": "Alger, Algérie",
    "message": "Health Plus a transformé mon expérience de soins de santé ! Les consultations en ligne étaient si pratiques, et les médecins étaient compétents et attentionnés."
  },
  {
    "name": "Ahmed Zerrouki",
    "location": "Oran, Algérie",
    "message": "J'ai trouvé le spécialiste parfait pour ma condition grâce à Health Plus. Le plan de traitement personnalisé a fait toute la différence. Merci de prioriser ma santé !"
  },
  {
    "name": "Nadia Boudiaf",
    "location": "Constantine, Algérie",
    "message": "Prendre des rendez-vous était un jeu d'enfant, et le service a dépassé mes attentes. Les médecins écoutent vraiment et fournissent des solutions efficaces. 5 étoiles !"
  },
  {
    "name": "Karim Boumediene",
    "location": "Annaba, Algérie",
    "message": "Health Plus est une révolution ! Les soins d'urgence m'ont sauvé lors d'une situation critique. Reconnaissant pour leur soutien rapide et efficace."
  },
  {
    "name": "Sabrina Chibane",
    "location": "Tizi Ouzou, Algérie",
    "message": "Je redoutais les visites dentaires, mais Health Plus en a fait une expérience agréable. Le dentiste était doux et professionnel. Je reviendrai certainement !"
  }
];

function Reviews() {
  return (
    <div className="review-section" id="reviews">
      <Mycxt.Provider value={Mycxt1}>
        <CardReview />
      </Mycxt.Provider>
    </div>
  );
}

export default Reviews;
