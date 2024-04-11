import React, { useState } from "react";
import { services } from "../data";
import { Link } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import { CustomScroll } from "react-custom-scroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const BookService = () => {
  const [formData, setFormData] = useState({
    appointmentTitle: [],
    appointmentDuration: "",
    appointmentPrice: "",
    numServices: 0,
  });

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  // if checked add them to the array if check is false filter them out
  const handleChange = () => {
    console.log(formData);
  };

  return (
    <>
      <div className="bookform__header">
        <Link to="/date" style={{ color: "white" }}>
          <span>
            <FontAwesomeIcon className="angle-icon" icon={faAngleLeft} />
          </span>
        </Link>
        1 / 3 Select one or more services
      </div>
      <form>
        <div className="appointment">
          <FontAwesomeIcon icon="fa-solid fa-angle-left" />
          <div className="appointment__head-title">Select Service</div>
          <div className="appointment__services">
            <CustomScroll>
              {services.map((service) => (
                <div
                  className="appointment__service-select"
                  key={service.title}
                >
                  <div className="appointment__service">
                    <div className="appointment__service-title">
                      {service.title}
                    </div>
                    <div className="appointment__service-duration">
                      1h - 1h:15min
                    </div>
                    <div className="appointment__service-title">
                      {service.price}
                    </div>
                  </div>
                  <div>
                    {/* <input
                    type="checkbox"
                    onClick={() => console.log(service.title)}
                  /> */}

                    <Checkbox
                      {...label}
                      onClick={() =>
                        setFormData.appointmentTitle([
                          ...formData.appointmentTitle,
                          service.title,
                        ])
                      }
                    />
                  </div>
                </div>
              ))}
            </CustomScroll>
          </div>
        </div>
        <div className="appointment__button">
          <div className="appointment__button-total">
            <div className="appointment__button-price">R200</div>
            <div className="appointment__button-services">
              {formData.numServices} Services - 1h 15min
            </div>
          </div>
          <div className="appointment__button-continue">
            <button>
              <Link to="/date" style={{ color: "white" }}>
                Continue
              </Link>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default BookService;
