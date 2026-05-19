import { useState } from "react";
import homeImg from "../assets/services/krbhome.jpg";
import designImg from "../assets/services/design.jpg";
import pedicureImg from "../assets/services/krbhome.jpg";
import acrylicImg from "../assets/services/acrylic.jpg";
import { images } from "../data";
import Navbar from "../components/Navbar"
import { IoIosArrowDropleft } from "react-icons/io";
import { FaGripLines } from "react-icons/fa6";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./../assets/home.jpg";
import Footer from "./Footer";

// data-aos="fade-up"
function Hero() {
  const [isClicked, setClick] = useState(false);
  const [selectedService, setSelectedService] = useState("acrylic");
  const services = ["acrylic", "design", "pedicure", "soaking"];

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
                <div className="services__sub">Soak & Cleanse | Exfoliation | Nail Care & Cuticle Treatment | Moisturise & Finish</div>
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
                <div className="services__sub">
                  Shape & Prep | Base Coat Application | Nail Art & Design | Top Coat Finish
                </div>              </div>
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
              <h2 className="service-title">Soaking</h2>

              <div className="services-description">
                Soaking nails involves immersing them in warm, soapy water to
                soften cuticles and prepare them for grooming. This step cleanses
                and hydrates the nails, making trimming and shaping easier. It
                also enhances relaxation and overall nail health.
              </div>

              <div className="services-types">
                <div className="services__sub">
                  Warm Soak | Cuticle Softening | Relaxing Prep | Hydration Boost
                </div>              </div>
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
                <div className="services__sub"> Buff | Shine</div>
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

  const handlePrev = () => {
    setSelectedService((prev) => {
      const i = services.indexOf(prev);
      return services[(i - 1 + services.length) % services.length];
    });
  };

  const handleNext = () => {
    setSelectedService((prev) => {
      const i = services.indexOf(prev);
      return services[(i + 1) % services.length];
    });
  };

  return (
    <div className="wrapper">
      <Navbar />
      <section className="hero">

        <div className="hero__welcome">
          <FaGripLines className="nav-open-icon" />
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
          
          <div className="services">
            {renderService()}
            <div className="services__container">
              <Link to="menu">
                <button className="services__container-btn mobl">LEARN MORE</button>
              </Link>
            </div>
          </div>
          <div className="slides-arrows">
            <FaAngleLeft className="footer-icon" onClick={handlePrev} />
            <FaAngleRight className="footer-icon" onClick={handleNext} />
          </div>
        </section>
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
          <h2 className="review__title">They're Talking</h2>
          <div className="reviews_section">

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
              <div className="review__container-name">- Kearabilwe</div>
            </div>
            <div className="review__container" data-aos="fade-down">
              <div className="review__container-review">
                Absolutely loved my experience. Flawless manicure, friendly staff,
                and a welcoming atmosphere. Can't wait to go back for more
                pampering.
              </div>
              <div className="review__container-name">- Tshepang</div>
            </div>
            <div className="review__container" data-aos="fade-down">
              <div className="review__container-review">
                Absolutely loved my experience. Flawless manicure, friendly staff,
                and a welcoming atmosphere. Can't wait to go back for more
                pampering.
              </div>
              <div className="review__container-name">- Karabo</div>
            </div>
          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Hero;
