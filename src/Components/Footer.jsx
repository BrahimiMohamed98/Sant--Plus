import React from "react";
import "../Styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="ft-info">
          <div className="ft-info-p1">
            <p className="ft-title">
              Santé <span className="ft-sign">+</span>
            </p>
            <p className="ft-description">
              Parlez à des médecins en ligne et obtenez des conseils médicaux, des ordonnances en ligne, des renouvellements et des notes médicales en quelques minutes. Services de santé à la demande à portée de main.
            </p>
          </div>
          <Link style={{ fontSize: '40px', color: 'white' }} to="/Comments">Comments</Link>
          </div>

        <div className="ft-list">
          <p className="ft-list-title">Services</p>
          <ul className="ft-list-items">
            <li>
              <a href="#services">Soins d'urgence</a>
            </li>
            <li>
              <a href="#services">Maladie cardiaque</a>
            </li>
            <li>
              <a href="#services">Soins dentaires</a>
            </li>
            <li>
              <a href="#services">Ordonnance</a>
            </li>
            <li>
              <a href="#doctors">Informations pour les médecins</a>
            </li>
          </ul>
        </div>

    

        <div className="ft-list" id="contact">
          <p className="ft-list-title">Parlez-nous</p>
          <ul className="ft-list-items">
            <li>
              support@Santéplus.com
            </li>
            <li>
              
                appointment@Santéplus.com
              
            </li>
            <li>
              +022 5454 5252
            </li>
            <li>
              +022 2326 6232
            </li>
          </ul>
        </div>
      </div>
      <p style={{ color: 'white' }}>© 2024 Santé+. Tous droits réservés.</p>

     
    </div>
  );
}

export default Footer;
