import React from "react";
import DoctorCard from "./DoctorCard";
import profile1 from "../Assets/profile-1.png";
import profile2 from "../Assets/profile-2.png";
import profile3 from "../Assets/profile-3.png";
import profile4 from "../Assets/profile-4.png";
import "../Styles/Doctors.css";

function Doctors() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Rencontrez Nos Médecins</span>
        </h3>

        <p className="dt-description">
          Rencontrez notre équipe exceptionnelle de médecins spécialistes, dédiée à fournir des services de santé de premier ordre chez Santé Plus. Faites confiance à leurs connaissances et à leur expérience pour vous guider vers une vie plus saine et plus heureuse.
        </p>
      </div>

      <div className="dt-cards-content">
        <DoctorCard
          img={profile1}
          name="Dr. Leila Kacem"
          title="Chirurgiens Généraux"
          stars="4.9"
          reviews="1800"
        />
        <DoctorCard
          img={profile2}
          name="Dr. Ahmed Benbrahim"
          title="Hématologues"
          stars="4.8"
          reviews="700"
        />
        <DoctorCard
          img={profile3}
          name="Dr. Yasmine Bouzid"
          title="Endocrinologues"
          stars="4.7"
          reviews="450"
        />
        <DoctorCard
          img={profile4}
          name="Dr. Karim Saadi"
          title="Hématologues"
          stars="4.8"
          reviews="500"
        />
      </div>
    </div>
  );
}

export default Doctors;
