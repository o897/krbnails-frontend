import { useContext, useState, useEffect } from "react";
import { services } from "../data";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PiArrowCircleLeftThin } from "react-icons/pi";
import { FaArrowRightLong } from "react-icons/fa6";

import { faMinus, faPlus, faArrowRight, } from "@fortawesome/free-solid-svg-icons";
import GlobalContext from "../GlobalContext";

const BookService = () => {
  const { updateGlobalData } = useContext(GlobalContext);

  const [formData, setFormData] = useState({
    appointmentTitle: [],
    appointmentDuration: 0,
    total: 0,
    numServices: 0,
    nails: 0,
    options: []
  });

  const [checkedState, setCheckedState] = useState(
    new Array(services.length).fill(false)
  );

  // starts with fixed prices, 0 for option-based services
  const [optionPrices, setOptionPrices] = useState(
    services.map((s) => s.price ?? 0) // if a service doesnt ave a price default its =
  );

  // tracks which option is selected per service
  const [selectedOptions, setSelectedOptions] = useState(
    new Array(services.length).fill(null)
  );

  const formatDuration = (minutes) => {
    const hrs = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hrs && mins) return `${hrs}h ${mins}min`;
    if (hrs) return `${hrs}h`;
    return `${mins}min`;
  };

  const handleOptionSelect = (index, option) => {
    const updatedOptionPrices = optionPrices.map((price, i) =>
      i === index ? option.price : price
    );

    // array of te selected options
    const updatedSelectedOptions = selectedOptions.map((opt, i) =>
      i === index ? option.name : opt
    );

    setOptionPrices(updatedOptionPrices);
    setSelectedOptions(updatedSelectedOptions);

    setFormData((prev) => ({
      ...prev,
      total: checkedState.reduce((sum, isChecked, i) => {
        return isChecked ? sum + updatedOptionPrices[i] : sum;
      }, 0) + prev.nails * 10,
    }));
  };

  const handleSelect = (e, position) => {
    e.preventDefault();

    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    setFormData((prev) => ({
      ...prev,
      appointmentTitle: updatedCheckedState[position]
        ? [
          ...prev.appointmentTitle,
          {
            service: services[position].title,
            price: optionPrices[position],
            duration: services[position].duration,
          },
        ]
        : prev.appointmentTitle.filter(
          (item) => item.service !== services[position].title
        ),
      total: updatedCheckedState.reduce((sum, isChecked, index) => {
        return isChecked ? sum + optionPrices[index] : sum;
      }, 0) + prev.nails * 10,
      appointmentDuration: updatedCheckedState.reduce((sum, isChecked, index) => {
        return isChecked ? sum + services[index].duration : sum;
      }, 0),
      numServices: updatedCheckedState.filter(Boolean).length,
    }));
  };

  const addNail = (e) => {
    e.preventDefault();
    setFormData((prev) => ({
      ...prev,
      nails: prev.nails < 10 ? prev.nails + 1 : 10,
      total: prev.nails < 10 ? prev.total + 10 : prev.total,
    }));
  };

  const removeNail = (e) => {
    e.preventDefault();
    setFormData((prev) => ({
      ...prev,
      nails: prev.nails > 0 ? prev.nails - 1 : 0,
      total: prev.nails > 0 ? prev.total - 10 : prev.total,
    }));
  };

  useEffect(() => {
    updateGlobalData({ ...formData });
    console.log(formData);
  }, [formData]);

  return (
    <>
      <div className="bookform__header">
        <Link to="/" style={{ color: "white" }}>
          <PiArrowCircleLeftThin className="angle-icon" />
        </Link>
        <div className="col">
          <span className="sm-txt">Step 1 of 3</span>
          <span className="st-txt">Select services</span>
        </div>
      </div>

      <form>
        <div className="appointment">
          {/* <div className="row app-serv-offd">
            {services.map(({ title }) => (
              <div key={title} className="serv_offered">{title}</div>
            ))}
          </div> */}

          <div className="appointment__services">
            {/* Nail drawings stepper */}
            <div className="appointment__service-select">
              <div className="appointment__service">
                <div className="appointment__service-title">Drawings</div>
                <div className="appointment__service-duration">number of nails</div>
                <div className="appointment__service-title">R10 per nail</div>
              </div>
              <div className="nail">
                <button onClick={removeNail}>
                  <span className="nail-btn"><FontAwesomeIcon icon={faMinus} /></span>
                </button>
                <div className="num_nails">{formData.nails}</div>
                <button onClick={addNail}>
                  <span className="nail-btn"><FontAwesomeIcon icon={faPlus} /></span>
                </button>
              </div>
            </div>

            {/* Services list */}
            <div className="appointment__services-scroll">
              {services.map(({ title, duration, description, options, img, nb }, index) => (
                <div key={index}>
                  <div
                    className="appointment__service-select"
                    style={{
                      backgroundColor: checkedState[index] ? "#ac92bc" : "transparent",
                      color: checkedState[index] ? "#fff" : "#000",
                      padding: "2px",
                    }}
                  >
                    <div className="appointment__service">
                      <img className="appointment__services-img" src={img} alt={title} />

                      <div className="appointment__service-title">{title}</div>
                      <div className="appointment__service-description">{description}</div>

                      {/* NB note */}
                      {/* {nb && <div className="appointment__service-nb">{nb}</div>} */}

                      {options && (
                        <>
                          <hr />
                          <div className="col">
                            <span className="sm-txt app_choose-op">Choose an option:</span>
                            <div className="app_options">
                              {options.map((option) => (
                                <div
                                  key={option.name}
                                  className={`app-options ${selectedOptions[index] === option.name ? "app-options--selected" : ""}`}
                                  onClick={() => handleOptionSelect(index, option)}
                                >
                                  {option.name}
                                </div>
                              ))}
                            </div>
                          </div>
                        </>
                      )}

                      <div className="appointment__service-bot">
                        <div className="appointment__service-title">
                          R{optionPrices[index]} | {duration}min
                        </div>
                        {(!options || selectedOptions[index]) && (
                          <button
                            className="appointment__service-button"
                            onClick={(e) => handleSelect(e, index)}
                          >
                            {checkedState[index] ? (
                              <span className="rmv">Remove</span>
                            ) : (
                              "Select"
                            )}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Continue button */}
        {formData.total !== 0 && (
          <div className="appointment__button">
            <div className="appointment__button-total">
              <div className="appointment__button-price">
                {formData.numServices} {formData.numServices > 1 || formData.nails ? "Services selected" : "Service selected"}
              </div>
              <div className="appointment__button-services">
                R{formData.total}
              </div>
            </div>
            <div className="appointment__button-continue">
              <button>
                <Link to="/date" state={{ formData }} style={{ color: "white" }}>
                  Continue <FontAwesomeIcon icon={faArrowRight} />
                </Link>

              </button>
            </div>
          </div>
        )}
      </form>
    </>
  );
};

export default BookService;