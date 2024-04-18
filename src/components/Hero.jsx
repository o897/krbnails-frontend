import React from "react";
import homeImg from "../assets/services/krbhome.jpg";
import designImg from "../assets/services/design.jpg";
import pedicureImg from "../assets/services/krbhome.jpg";
import acrylicImg from "../assets/services/acrylic.jpg";
import { images } from "../data";

import {
  faInstagram,
  faTiktok,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

// data-aos="fade-up"
function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero__welcome">
          <div className="hero__welcome-title">
            Elevate Your Look, One Nail at a Time
          </div>
          <div className="hero__welcome-img">
            <img
              src="https://www.refinery29.com/images/8448082.jpg"
              alt="landing img"
            />
          </div>
          <Link to="book">
            <button className="hero__bookbtn">BOOK AN APPOINTMENT</button>
          </Link>
        </div>
      </section>

      <main className="main">
        <section className="services">
          <h2>Services</h2>
          <div className="services">
            <div
              className="services__container services__container-big"
              data-aos="fade-right"
            >
              <img src={acrylicImg} alt="" srcSet="" />
              <div className="services__title">Acrylic</div>
              <div className="services__sub">4 Services</div>
            </div>
            <div
              className="services__container services__container-small"
              data-aos="fade-left"
            >
              <img src={pedicureImg} alt="" srcSet="" />
              <div className="services__title">Pedicure</div>
              <div className="services__sub">2 Services</div>
            </div>
            <div
              className="services__container services__container-big"
              data-aos="fade-right"
            >
              <img src={designImg} alt="" srcSet="" />
              <div className="services__title">Designs</div>
              <div className="services__sub">4 Services</div>
            </div>
            <div
              className="services__container services__container-small"
              data-aos="fade-left"
            >
              <img src={homeImg} alt="" srcSet="" />
              <div className="services__title">Buff & Shine</div>
              <div className="services__sub">2 Services</div>
            </div>
            <div className="services__container">
              <Link to="menu">
                <button className="services__container-btn">LEARN MORE</button>
              </Link>
            </div>
          </div>
        </section>
        {/* <section className="socials">
          <div className="socials__title">TLAMIS</div>
          <div className="social__sub-title">Nail. Creative. Art</div>

          <div className="socials__followus">Follow us on instagram</div>
          <button className="socials_link-btn">
            <FontAwesomeIcon icon={faInstagram} /> @tlamis_nail_gallery
          </button>
        </section> */}
        <section>
          <div className="book">
            <div className="book__heading">Nail Your Look, Every Day!</div>
            <button className="book__btn">
              <Link to="book">BOOK AN APPOINTMENT</Link>
            </button>
          </div>
        </section>
        <section className="gallery">
          <div className="gallery__heading">Follow our journey</div>
          <div className="gallery__container">
            <img src={images[1].source} alt="" />
            <img src={images[2].source} alt="" />
          </div>
          <div className="gallery__container">
            <img src={images[3].source} alt="" />
            <img src={images[4].source} alt="" />
          </div>
          <div className="gallery__container">
            <img src={images[5].source} alt="" />
            <img src={images[6].source} alt="" />
          </div>
          <div className="gallery__container">
            <img src={images[7].source} alt="" />
            <img src={images[0].source} alt="" />
          </div>
        </section>
        <section className="reviews">
          <div className="review__title">They're Talking</div>
          <div className="review__container" data-aos="fade-left">
            <div className="review__container-review">
              Positive vibes all the way. Hygienic, long-lasting gel manicure,
              and a friendly staff. Found my new favorite spot – definitely
              coming back!
            </div>
            <div className="review__container-name">- Rearabilwe</div>
          </div>
          <div className="review__container" data-aos="fade-down">
            <div className="review__container-review">
              Had an amazing nail art session. Creative team, clean space, and a
              relaxing vibe. Definitely exceeded my expectations. Highly
              recommend!
            </div>
            <div className="review__container-name">Kearabilwe</div>
          </div>
          <div className="review__container" data-aos="fade-down">
            <div className="review__container-review">
              Absolutely loved my experience. Flawless manicure, friendly staff,
              and a welcoming atmosphere. Can't wait to go back for more
              pampering.
            </div>
            <div className="review__container-name">Tshepang</div>
          </div>
        </section>
      </main>

      <footer>
        <section className="footer">
          <div className="footer__visit-tile">Visit Us</div>
          <div className="footer__container">
            <div className="footer__title">LOCATION</div>
            <div className="footer__details">263 Odinburg Gardens</div>
          </div>
          <div className="footer__container">
            <div className="footer__title">PHONE</div>
            <div className="footer__details">+27 680327197</div>
          </div>
          <div className="footer__container">
            <div className="footer__title">Timetable</div>
            <div className="footer__timetable">
              <div className="footer__details">Sunday: Closed</div>
              <div className="footer__details">
                Monday - Friday : 10am - 18pm
              </div>
              <div className="footer__details">Saturday : 10am - 18pm</div>
            </div>
          </div>

          <div className="footer__container footer__socials">
            <li>
              <FontAwesomeIcon icon={faYoutube} />
            </li>
            <li>
              <FontAwesomeIcon icon={faTiktok} />
            </li>
            <li>
              <a href="https://www.instagram.com/tlamis_nail_gallery/">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <FontAwesomeIcon icon={faWhatsapp} />
            </li>
          </div>
        </section>
      </footer>
    </>
  );
}

export default Hero;
