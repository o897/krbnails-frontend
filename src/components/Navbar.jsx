import {
  faInstagram,
  faTiktok,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HiOutlineBars2 } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import { FiArrowUpRight } from "react-icons/fi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const toggleMenu = () => {
    setShow((current) => !current);
  };

  const closeMenu = () => {
    setShow(false);
  };

  const scrollToSection = (id) => {
    closeMenu();

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);

  const navigation = [
    {
      number: "01",
      label: "Services",
      section: "services",
    },
    {
      number: "02",
      label: "Our Work",
      section: "gallery",
    },
    {
      number: "03",
      label: "Contact",
      section: "contact",
    },
    {
      number: "04",
      label: "Find Us",
      section: "address",
    },
  ];

  return (
    <>
      <button
        type="button"
        className={`bars-wrap ${show ? "menu-is-open" : ""}`}
        onClick={toggleMenu}
        aria-label={show ? "Close menu" : "Open menu"}
        aria-expanded={show}
      >
        <HiOutlineBars2
          strokeWidth={0.7}
          className={`bars-icon ${show ? "icon-hide" : "icon-show"}`}
        />

        <IoCloseOutline
          className={`close-icon ${show ? "icon-show" : "icon-hide"}`}
        />
      </button>

      <header className="header">
        <img src="/krb_logo.png" alt="Tlami's Nail Gallery" />

        <nav className="header_menu">
          <button
            type="button"
            className="header_menu-items"
            onClick={() => scrollToSection("services")}
          >
            Services
          </button>

          <button
            type="button"
            className="header_menu-items"
            onClick={() => scrollToSection("gallery")}
          >
            Our Work
          </button>

          <button
            type="button"
            className="header_menu-items"
            onClick={() => scrollToSection("address")}
          >
            Find Us
          </button>

          <a
            href="https://wa.me/c/27693205227"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>

          <a
            href="https://www.instagram.com/tlamis_nail_gallery/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>

          <a
            href="https://www.tiktok.com/@tlamis_nail_gallery03?_r=1&_t=ZS-963XVhhkLZd"
            target="_blank"
            rel="noreferrer"
            aria-label="TikTok"
          >
            <FontAwesomeIcon icon={faTiktok} />
          </a>

          <Link to="/book">
            <button type="button">BOOK NOW</button>
          </Link>
        </nav>
      </header>

      <div
        className={`mobile-menu ${show ? "mobile-menu--open" : ""}`}
        aria-hidden={!show}
      >
        <div className="mobile-menu__decoration">TLAMI'S</div>

        <div className="mobile-menu__header">
          <div className="mobile-menu__brand">
            <img src="/krb_logo.png" alt="" />

            <div>
              <span className="mobile-menu__brand-name">
                Tlami's Nail Gallery
              </span>

              <span className="mobile-menu__brand-subtitle">
                Beauty at your fingertips
              </span>
            </div>
          </div>
        </div>

        <nav className="mobile-menu__links" aria-label="Mobile navigation">
          {navigation.map((item) => (
            <button
              type="button"
              className="mobile-menu__link"
              key={item.number}
              onClick={() => scrollToSection(item.section)}
            >
              <span className="mobile-menu__number">
                {item.number}
              </span>

              <span className="mobile-menu__label">
                {item.label}
              </span>

              <FiArrowUpRight aria-hidden="true" />
            </button>
          ))}
        </nav>

        <div className="mobile-menu__bottom">
          <Link
            to="/book"
            className="mobile-menu__book"
            onClick={closeMenu}
          >
            Book now
          </Link>

          <div className="mobile-menu__meta">
            <div className="mobile-menu__socials">
              <a
                href="https://wa.me/c/27693205227"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>

              <a
                href="https://www.instagram.com/tlamis_nail_gallery/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>

              <a
                href="https://www.tiktok.com/@tlamis_nail_gallery03?_r=1&_t=ZS-963XVhhkLZd"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
              >
                <FontAwesomeIcon icon={faTiktok} />
              </a>
            </div>

            <p className="mobile-menu__location">
              Odinburg Gardens
              <br />
              Mabopane
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;