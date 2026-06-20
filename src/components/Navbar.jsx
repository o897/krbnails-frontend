import {
  faInstagram,
  faTiktok,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HiOutlineBars2 } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const toggleWidth = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="header">
        <img src="krb_logo.png" alt="logo" />

        <div className="bars-wrap" onClick={toggleWidth}>
          <HiOutlineBars2 className={`bars-icon ${show ? "icon-hide" : "icon-show"}`} />
          <IoCloseOutline className={`close-icon ${show ? "icon-show" : "icon-hide"}`} />
        </div>

        <div className="header_menu">
          <a href="#services" className="header_menu-items">Services</a>
          <a href="#contact" className="header_menu-items">Contact</a>
          <a href="#address" className="header_menu-items">Address</a>

          <a href="https://wa.me/c/27693205227"><FontAwesomeIcon icon={faWhatsapp} /></a>
          <a href="https://www.instagram.com/tlamis_nail_gallery/"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://www.tiktok.com/@tlamis_nail_gallery03?_r=1&_t=ZS-963XVhhkLZd"><FontAwesomeIcon icon={faTiktok} /></a>
          <Link to="book">
            <button>BOOK NOW</button>
          </Link>
        </div>
      </div>

      {/* mobile menu */}
      <div className="header__nav" style={{ display: show ? "block" : "none" }}>
        <div className="header__menu">
          <a href="#services" onClick={() => setShow(false)}>Services</a>
          <a href="#gallery" onClick={() => setShow(false)}>Gallery</a>
          <a href="#contact" onClick={() => setShow(false)}>Contact</a>
          <a href="#address" onClick={() => setShow(false)}>Address</a>
        </div>

        <div className="header__nav-socials">
          <a href="https://wa.me/c/27693205227"><FontAwesomeIcon icon={faWhatsapp} /></a>
          <a href="https://www.instagram.com/tlamis_nail_gallery/"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://www.tiktok.com/@tlamis_nail_gallery03?_r=1&_t=ZS-963XVhhkLZd"><FontAwesomeIcon icon={faTiktok} /></a>
        </div>

        <div className="header__nav-bookbtn">
          <Link to="book" onClick={toggleWidth}>
            <button>BOOK NOW</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;