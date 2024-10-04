import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        <Link to="/">
        Santé <span className="navbar-sign">+</span>
        </Link>
      </h1>

      <ul className="navbar-items">
        <li>
          <Link to="/" className="navbar-links">
          Accueil
          </Link>
        </li>
        <li>
          <a href="#services" className="navbar-links">
            Services
          </a>
        </li>
        <li>
          <a href="#about" className="navbar-links">
          À Propos
          </a>
        </li>
        <li>
          <a href="#reviews" className="navbar-links">
          Avis
          </a>
        </li>
        <li>
          <a href="#doctors" className="navbar-links">
          Médecins
          </a>
        </li>
      </ul>      
    </div>
  );
}

export default Navbar;
