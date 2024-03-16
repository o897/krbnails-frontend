import React, { useState } from "react";
import { services } from "../data";
import { Link } from "react-router-dom";
import Checkbox from '@mui/material/Checkbox';

const BookService = () => {
  const [formData, seFormData] = useState({
    appointmentTitle: [],
    appointmentDuration: "",
    appointmentPrice: "",
    numServices: 0,
  });
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


  const [checked, setIsChecked] = useState(false);

  // if checked add them to the array if check is false filter them out
  const handleChange = (e) => {
    console.log(formData);
  };

  return (
    <>
      <form>
        <div className="appointment">
          <div className="appointment__head-title">Select Service</div>
          <div className="appointment__services">
            {services.map((service) => (
              <div className="appointment__service-select" key={service.title}>
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
                  <Checkbox {...label}  onClick={() => console.log(service.title)}/>

                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="appointment__button">
            <div className="appointment__button-total">
              <div className="appointment__button-price">R200</div>
              <div className="appointment__button-services">
                2 Services - 1h 15min
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
