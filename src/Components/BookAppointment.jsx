import React from "react";
import médecin from "../Assets/doctor-book-appointment.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/BookAppointment.css";

function BookAppointment() {



  return (
    <div className="ba-section">
      <div className="ba-image-content">
        <img src={médecin} alt="Groupe de médecins" className="ba-image1" />
      </div>

      <div className="ba-text-content">
        <h3 className="ba-title">
          <span>Pourquoi choisir Santé + </span>
        </h3>
        <p className="ba-description">
          Découvrez les raisons de choisir Santé Plus pour vos besoins de santé.
          Expérience de soins experts, de commodité et de solutions personnalisées,
          faisant de votre bien-être notre priorité absolue. Rejoignez-nous dans un
          voyage vers une meilleure santé et une vie plus heureuse.
        </p>

        <p className="ba-checks ba-check-first">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Meilleurs médecins professionnels
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Soins d'urgence
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Support en direct 24/7
        </p>
        <p className="ba-checks ba-check-last">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Inscription facile et rapide
        </p>

        <button
          className="text-appointment-btn"
          type="button">
           Prendre rendez-vous
        </button>
      </div>
    </div>
  );
}

export default BookAppointment;
