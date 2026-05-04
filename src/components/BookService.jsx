import { useContext, useState, useEffect } from "react";
import { services } from "../data";
import { Link } from "react-router-dom";
import { CustomScroll } from "react-custom-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import GlobalContext from "../GlobalContext";
import designImg from "../assets/services/design.jpg";

const BookService = () => {
  const { updateGlobalData } = useContext(GlobalContext);

  const [formData, setFormData] = useState({
    appointmentTitle: [],
    appointmentDuration: "",
    total: 0,
    numServices: 0,
    nails: 0,
  });

  const [checkedState, setCheckedState] = useState(
    new Array(services.length).fill(false)
  );

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
              price: services[position].price,
            },
          ]
        : prev.appointmentTitle.filter(
            (item) => item.service !== services[position].title
          ),
      total: updatedCheckedState.reduce((sum, currentState, index) => {
        if (currentState === true) {
          return sum + services[index].price;
        }
        return sum;
      }, 0),
      numServices: updatedCheckedState.filter(Boolean).length,
    }));
  };

  const addNail = (e) => {
    e.preventDefault();
    setFormData((prev) => ({
      ...prev,
      nails: prev.nails < 10 ? prev.nails + 1 : 10,
      total: prev.nails < 10 ? prev.total + 5 : prev.total,
    }));
  };

  const removeNail = (e) => {
    e.preventDefault();
    setFormData((prev) => ({
      ...prev,
      nails: prev.nails > 0 ? prev.nails - 1 : 0,
      total: prev.nails > 0 ? prev.total - 5 : prev.total,
    }));
  };

  useEffect(() => {
    updateGlobalData({ formData });
  }, [formData]);

  return (
    <>
      <div className="bookform__header">
        <Link to="/" style={{ color: "white" }}>
          <span>
            <FontAwesomeIcon className="angle-icon" icon={faAngleLeft} />
          </span>
        </Link>
        1 / 3 Select one or more services
      </div>

      <form>
        <div className="appointment">
          <div className="appointment__head-title">All Services</div>
          <div className="appointment__services">

            {/* Nail drawings section */}
            <div className="appointment__service-select" style={{ border: "none" }}>
              <div className="appointment__service">
                <div className="appointment__service-title">Drawings</div>
                <div className="appointment__service-duration">number of nails</div>
                <div className="appointment__service-title">R5 per nail</div>
              </div>
              <div className="nail">
                <button onClick={removeNail}>
                  <span className="nail-btn">
                    <FontAwesomeIcon icon={faMinus} />
                  </span>
                </button>
                <div className="num_nails">{formData.nails}</div>
                <button onClick={addNail}>
                  <span className="nail-btn">
                    <FontAwesomeIcon icon={faPlus} />
                  </span>
                </button>
              </div>
            </div>

            {/* Services list */}
          <div className="appointment__services-scroll">
              {services.map(({ title, price }, index) => (
                <div key={index}>
                  <div
                    className="appointment__service-select"
                    style={{
                      backgroundColor: checkedState[index] ? "#ac92bc" : "transparent",
                      color: checkedState[index] ? "#fff" : "#000",
                      borderRadius: "4px",
                      padding: "2px",
                    }}
                  >
                    <div className="appointment__service">
                      <div>
                        <img
                          className="appointment__services-img"
                          src={designImg}
                          alt={title}
                        />
                      </div>
                      <div className="appointment__service-title">{title}</div>
                      <div className="appointment__service-description">
                        Begins with a warm foot soak, includes all regular
                        maintenance and finished with choice of regular polish.
                      </div>
                      <div className="appointment__service-bot">
                        <div className="appointment__service-title">
                          R{price} | 40min
                        </div>
                        <div>
                          <button
                            className="appointment__service-button"
                            onClick={(e) => handleSelect(e, index)}
                          >
                            {checkedState[index] ? "Deselect" : "Select"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>

        {/* Continue button — only shows when something is selected */}
        {formData.total !== 0 && (
          <div className="appointment__button">
            <div className="appointment__button-total">
              <div className="appointment__button-price">
                {formData.numServices} Services
              </div>
              <div className="appointment__button-services">
                R{formData.total} - 1h 15min
              </div>
            </div>
            <div className="appointment__button-continue">
              <button>
                <Link to="/date" state={{ formData }} style={{ color: "white" }}>
                  Next
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