

import {
  faInstagram,
  faTiktok,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faGripLines } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import navbarImg from "./../assets/navbar.png"


const Navbar = () => {
  const [show, setShow] = useState(false);

  const toggleWidth = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="header">

        <img className="" src={navbarImg} alt="" />

        <div className="header_menu">
          <div className="header_menu-items">Sevices</div>
          <div className="header_menu-items">Contact</div>
          <FontAwesomeIcon icon={faWhatsapp} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faTiktok} />

          <Link to="book">
            <button>BOOK NOW</button>
          </Link>


        </div>
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
