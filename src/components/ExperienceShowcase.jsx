import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import buffImage from "../assets/services/bns.jpeg";
import designImage from "../assets/services/design.jpg";
import pedicureImage from "../assets/services/pedicure.jpeg";
import acrylicImage from "../assets/services/acrylic.jpeg";

const slides = [
  {
    label: "THE TLAMI EXPERIENCE",
    title: "Beauty, down to the last detail.",
    description:
      "Thoughtful nail care, clean finishes and a little time set aside entirely for you.",
    image: buffImage,
    alt: "Beautifully polished natural nails",
  },
  {
    label: "CREATED FOR YOU",
    title: "Your style, made unforgettable.",
    description:
      "From simple details to expressive nail art, every look is shaped around your personality.",
    image: designImage,
    alt: "Creative nail art design",
  },
  {
    label: "A MOMENT TO UNWIND",
    title: "Care that goes beyond beauty.",
    description:
      "Relax, recharge and leave feeling renewed with a treatment designed to care for your feet.",
    image: pedicureImage,
    alt: "Relaxing professional pedicure",
  },
  {
    label: "OUR SIGNATURE FINISH",
    title: "Confidence at your fingertips.",
    description:
      "Beautifully shaped acrylic sets with strength, balance and a finish made to stand out.",
    image: acrylicImage,
    alt: "Elegant acrylic nail set",
  },
];

function ExperienceShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slide = slides[currentSlide];

  const showPrevious = () => {
    setCurrentSlide((current) =>
      current === 0 ? slides.length - 1 : current - 1
    );
  };

  const showNext = () => {
    setCurrentSlide((current) =>
      current === slides.length - 1 ? 0 : current + 1
    );
  };

  const progress = ((currentSlide + 1) / slides.length) * 100;

  return (
    <section id="services" className="experience">
      <div className="experience__container">
        <div className="experience__image-container">
          <img
            key={slide.image}
            className="experience__image"
            src={slide.image}
            alt={slide.alt}
          />

          <span className="experience__image-label">
            The finishing touch
          </span>
        </div>

        <div className="experience__content">
          <p className="experience__label">{slide.label}</p>

          <h2 className="experience__title">{slide.title}</h2>

          <p className="experience__description">
            {slide.description}
          </p>

          <a className="experience__link" href="#gallery">
            Explore our work
            <span aria-hidden="true">↗</span>
          </a>

          <div className="experience__navigation">
            <button
              type="button"
              className="experience__arrow"
              onClick={showPrevious}
              aria-label="Show previous slide"
            >
              <FaAngleLeft />
            </button>

            <div className="experience__progress-area">
              <div className="experience__progress">
                <span
                  className="experience__progress-value"
                  style={{ width: `${progress}%` }}
                ></span>
              </div>

              <span className="experience__counter">
                {String(currentSlide + 1).padStart(2, "0")} /{" "}
                {String(slides.length).padStart(2, "0")}
              </span>
            </div>

            <button
              type="button"
              className="experience__arrow"
              onClick={showNext}
              aria-label="Show next slide"
            >
              <FaAngleRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceShowcase;