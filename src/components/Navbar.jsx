import {
  faInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const toggleWidth = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="header__logo">
        <p className="header__log-title">KRBNails</p>
        <button onClick={() => toggleWidth()}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      <div className="header__nav" style={{ display: show ? "block" : "none" }}>
        <div className="header__menu">
          <Link to="/" onClick={() => toggleWidth()}>
            Home
          </Link>
          <Link to="/about">
            About
          </Link>
          <Link to="/services" onClick={() => toggleWidth()}>
            Services
          </Link>
          <Link to="/gallery">
            Gallery
          </Link>
          <Link to="/services" onClick={() => toggleWidth()}>
            Contact
          </Link>
        </div>

        <div className="header__nav-socials">
          <li>
            <FontAwesomeIcon icon={faYoutube} />
          </li>
          <li>
            <FontAwesomeIcon icon={faTiktok} />
          </li>
          <li>
            <FontAwesomeIcon icon={faInstagram} />
          </li>
        </div>

        <div className="header__nav-bookbtn">
        <Link to='book'>
          <button>BOOK NOW</button>
        </Link>
          
        </div>

      </div>
    </>
  );
};

export default Navbar;
