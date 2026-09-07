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

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <>
      <div className="header">
        <img src="krb_logo.png" alt="logo" />

        <div className="bars-wrap" onClick={toggleWidth}>
          <HiOutlineBars2 strokeWidth={0.7} className={`bars-icon ${show ? "icon-hide" : "icon-show"}` } />
          <IoCloseOutline className={`close-icon ${show ? "icon-show" : "icon-hide"}`} />
        </div>

        <div className="header_menu">
          <div
            className="header_menu-items"
            onClick={() => scrollToSection("services")}
          >
            Services
          </div>

          <div
            className="header_menu-items"
            onClick={() => scrollToSection("gallery")}
          >
            Gallery
          </div>

          <div
            className="header_menu-items"
            onClick={() => scrollToSection("address")}
          >
            Address
          </div>

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
          <a onClick={() => scrollToSection("services")}>Services</a>
          <a onClick={() => scrollToSection("gallery")}>Gallery</a>
          <a onClick={() => scrollToSection("contact")}>Contact</a>
          <a onClick={() => scrollToSection("address")}>Address</a>

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