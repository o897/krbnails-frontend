import { useState } from "react";
import homeImg from "../assets/services/krbhome.jpg";
import designImg from "../assets/services/design.jpg";
import pedicureImg from "../assets/services/krbhome.jpg";
import acrylicImg from "../assets/services/acrylic.jpg";
import { images } from "../data";
import Navbar from "../components/Navbar"

import {
  faInstagram,
  faTiktok,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faGripLines } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./../assets/home.jpg";

// data-aos="fade-up"
function Hero() {
  const [isClicked, setClick] = useState(false);
  const [selectedService, setSelectedService] = useState("acrylic");

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const renderService = (service) => {
    switch (selectedService) {
      case "pedicure":
        return (
          <div className="services__container services__container-big">
            <img src={pedicureImg} alt="" srcSet="" />
            <div className="services-info">
              <h2 className="service-title">Pedicure</h2>
              <div className="services-description">
                A pedicure is a beauty treatment for the feet and toenails,
                involving soaking, exfoliating, and moisturizing. It includes
                trimming and shaping the nails, often with nail polish
                application.
              </div>
              <div className="services-types">
                <div className="services__title">Pedicure |</div>
                <div className="services__sub">2 Services</div>
              </div>
              <Link to="menu">
                <button className="services__container-btn">LEARN MORE</button>
              </Link>

            </div>

          </div>
        );
      case "design":
        return (
          <div className="services__container services__container-big">
            <img src={designImg} alt="" />
            <div className="services-info">
              <h2 className="service-title">Designs</h2>

              <div className="services-description">
                Elevate your look with stunning nail art designs that showcase
                your unique style. Our expert artists create vibrant, intricate
                patterns tailored just for you. Make a bold statement with
                beautifully crafted, eye-catching nails.
              </div>
              <div className="services-types">
                <div className="services__title">Designs</div>
                <div className="services__sub">4 Services</div>
              </div>
              <Link to="menu">
                <button className="services__container-btn">LEARN MORE</button>
              </Link>
            </div>

          </div>
        );
      case "soaking":
        return (
          <div className="services__container services__container-big">
            <img src={acrylicImg} alt="" srcSet="" />
            <div className="services-info">
              <h2 className="service-title">Acrylic</h2>

              <div className="services-description">
                Soaking nails involves immersing them in warm, soapy water to
                soften cuticles and prepare them for grooming. This step cleanses
                and hydrates the nails, making trimming and shaping easier. It
                also enhances relaxation and overall nail health.
              </div>

              <div className="services-types">
                <div className="services__title">Acrylic</div>
                <div className="services__sub">2 Services</div>
              </div>
              <Link to="menu">
                <button className="services__container-btn">LEARN MORE</button>
              </Link>
            </div>

          </div>
        );
      case "acrylic":
        return (
          <div
            className="services__container services__container-big"
            data-aos="fade-right"
          >
            <img src={acrylicImg} alt="" srcSet="" />
            <div className="services-info">
              <h2 className="service-title">Buff & Shine</h2>
              <div className="services-description">
                A pedicure is a beauty treatment for the feet and toenails,
                involving soaking, exfoliating, and moisturizing. It includes
                trimming and shaping the nails, often with nail polish
                application.
              </div>
              <div className="services-types">
                <div className="services__title">Acrylic</div>
                <div className="services__sub">4 Services</div>
              </div>
              <div className="services__container">
                <Link to="menu">
                  <button className="services__container-btn dsktp">LEARN MORE</button>
                </Link>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="wrapper">
      <Navbar/>
      <section className="hero">

        <div className="hero__welcome">            
          <FontAwesomeIcon className="nav-open-icon" icon={faGripLines}/>
          <div className="hero__welcome-title">

            Where beauty <span className="wht">meets your </span> <span className="wht">fing</span>ertips.
          </div>
          <div className="hero__welcome-sub">
            BEAUTY IN DETAIL
          </div>
          <div className="hero__welcome-img">
            <img
              src="nailvid.gif"
            />
            
          </div>
          <Link to="book">
            <button
              className="hero__bookbtn"
            >
              <span className="wht">BOOK A</span>N APPOINTMENT
            </button>
          </Link>
        </div>
      </section>

      <main className="main">
        <section className="services">
          <h2>Services</h2>
          <div className="services-menu">
            <div
              className="services-menu-items"
              onClick={() => handleServiceClick("design")}
            >
              Design
            </div>
            <div
              className="services-menu-items"
              onClick={() => handleServiceClick("pedicure")}
            >
              Pedicure
            </div>
            <div
              className="services-menu-items"
              onClick={() => handleServiceClick("soaking")}
            >
              Soaking
            </div>
          </div>
          <div className="services">
            {renderService()}
            <div className="services__container">
              <Link to="menu">
                <button className="services__container-btn mobl">LEARN MORE</button>
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
            <h2>Nail Your Look, Every Day!</h2>
            <button className="book__btn">
              <Link to="book">BOOK AN APPOINTMENT</Link>
            </button>
          </div>
        </section>

        <section className="gallery">
          <h2 className="gallery__heading">Follow our journey</h2>
          <div className="gallery_wrapper">
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
          </div>
        </section>

        <section className="reviews">
          <div className="reviews_section">
            <h2 className="review__title">They're Talking</h2>

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
            <div className="review__container" data-aos="fade-down">
              <div className="review__container-review">
                Absolutely loved my experience. Flawless manicure, friendly staff,
                and a welcoming atmosphere. Can't wait to go back for more
                pampering.
              </div>
              <div className="review__container-name">Karabo</div>
            </div>
          </div>

        </section>
      </main>

      <footer>
        <section className="footer">
          <div className="footer__visit-tile">Visit Us</div>
          <div className="footer__container">
            <div className="footer__title">Location</div>
            <div className="footer__details">263 Odinburg Gardens</div>
          </div>
          <div className="footer__container">
            <div className="footer__title">Phone</div>
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

          <div className="row footer__socials">
            <li>
              <FontAwesomeIcon icon={faYoutube} color="#fff" />
            </li>
            <li>
              <FontAwesomeIcon icon={faTiktok} color="#fff" />
            </li>
            <li>
              <a href="https://www.instagram.com/tlamis_nail_gallery/">
                <FontAwesomeIcon icon={faInstagram} color="#fff" />
              </a>
            </li>
            <li>
              <FontAwesomeIcon icon={faWhatsapp} color="#fff" />
            </li>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default Hero;
