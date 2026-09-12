import ExperienceShowcase from "./ExperienceShowcase";
import { images } from "../data";
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom";
import "./../assets/home.jpg";
import Footer from "./Footer";

// data-aos="fade-up"
function Hero() {


  return (
    <div className="wrapper">
      <Navbar />
      <section className="hero">
        <div className="hero__welcome">
          <div className="hero__welcome-title">
            Where beauty <span className="wht">meets your </span> <span className="wht">fing</span>ertips.
          </div>
          <div className="hero__welcome-sub">
            TLAMI'S NAIL GALLERY
          </div>
          <div className="hero__welcome-img">
            <img src="krbhome.jpeg" />
          </div>
          <Link to="book">
            <button className="hero__bookbtn">
              <span className="">BOOK A</span>N APPOINTMENT
            </button>
          </Link>
        </div>
      </section>

      <main className="main">

        <ExperienceShowcase />

        {/* <section>
          <div className="book">
            <h2>Nail Your Look, Every Day!</h2>
            <button className="book__btn">
              <Link to="book">BOOK AN APPOINTMENT</Link>
            </button>
          </div>
        </section> */}

        <section id="gallery" className="gallery">
          <h2 className="gallery__heading">Follow our journey</h2>
          <div className="gallery_wrapper">
            <div className="gallery__container">
              <img src={images[1].source} alt="" />
              <img src={images[2].source} alt="" />
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
        <section className="address" id="address">
          <h2 className="address-title">
            Address
          </h2>
          <div className="map-section">
            <div className="map-section__label">
              262 Mamarugwana St, Odinburg Gardens
            </div>
            <iframe
              title="Tlami's Nail Gallery Location"
              src="https://maps.google.com/maps?q=262+Mamarugwana+St,+Odinburg+Gardens,+Mabopane,+0205&t=k&z=18&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        <section id="policy" className="pol">
          <div className="policy">
            <p className="policy__title">Booking Policy</p>
            <ul className="policy__list">
              <li>Please arrive 20 minutes before your appointment.</li>
              <li>A 50% deposit is required to reserve your booking.</li>
              <li>Pay details Capitec — Acc: 187 590 8909, Branch: 470010, Ref: Name + contact numbers.</li>
              <li>Payment must be made at least 10 minutes before your appointment, or the slot is released.</li>
              <li>Submit proof of payment to +27 68 032 7197. We'll confirm your booking via email.</li>
            </ul>
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