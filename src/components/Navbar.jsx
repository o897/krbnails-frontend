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
          <div className="header_menu-items">Services</div>
          <div className="header_menu-items">Contact</div>
          <div className="header_menu-items">Address</div>

          <FontAwesomeIcon icon={faWhatsapp} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faTiktok} />
          <Link to="book">
            <button>BOOK NOW</button>
          </Link>
        </div>
      </div>

      {/* mobile menu */}
      <div className="header__nav" style={{ display: show ? "block" : "none" }}>
        <div className="header__menu">
          <Link to="/services" onClick={toggleWidth}>Services</Link>
          <Link to="/gallery" onClick={toggleWidth}>Gallery</Link>
          <Link to="/contact" onClick={toggleWidth}>Contact</Link>
          <Link to="/contact" onClick={toggleWidth}>Address</Link>

        </div>

        <div className="header__nav-socials">
          <li><FontAwesomeIcon icon={faYoutube} /></li>
          <li><FontAwesomeIcon icon={faTiktok} /></li>
          <li><FontAwesomeIcon icon={faInstagram} /></li>
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