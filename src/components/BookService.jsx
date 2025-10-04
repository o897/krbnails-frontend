import { useContext, useState } from "react";
import { services } from "../data";
import { Link } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import { CustomScroll } from "react-custom-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import GlobalContext from "../GlobalContext";
import designImg from "../assets/services/design.jpg";


const BookService = () => {
  // Onchange means if anything changes 
  const { globalData, updateGlobalData } = useContext(GlobalContext);

  // replace form data with global data
  const [formData, setFormData] = useState({
    appointmentTitle: [],
    appointmentDuration: "",
    total: 0,
    numServices: 0,
    checkedState: new Array(services.length).fill(false),
    nails: 0,
  });

  const [checkedState, setCheckedState] = useState(
    new Array(services.length).fill(false)
  );

  // const label = { inputProps: { "aria-label": "Checkbox demo" } };

  // if checked add them to the array if check is false filter them out
  // const handleOnChange = (event, position) => {
  //   const updatedCheckedState = checkedState.map((item, index) =>
  //     index === position ? !item : item
  //   );

  //   // WE'LL MAKE THEM SELET INSTEAD OF CHECKBOXES
  //   setCheckedState(updatedCheckedState);

  //   setFormData((prevFormData) => {

  //     let updatedServices = [
  //       ...prevFormData.appointmentTitle, {
  //         title: services[position].title,
  //         price: services[position].price,
  //       }
  //     ];

  //     return {
  //       ...prevFormData,
  //       numServices: formData.checkedState.filter(Boolean).length,
  //       total: updatedCheckedState.reduce((sum, currentState, index) => {
  //         if (currentState === true) {
  //           return sum + services[index].price;
  //         }
  //         return sum;
  //       }, 0),
  //     }
  //   });
  // };

  const handleSelect = (e, position) => {
    e.preventDefault();

    // update the checked states after selecting a card
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    setFormData((prevFormData) => ({
      ...prevFormData,
      appointmentTitle: [
        ...prevFormData.appointmentTitle, updatedCheckedState[position]
          ? {
            ...prevFormData.appointmentTitle,
            service: services[position].title,
            price: services[position].price,
          }
          : prevFormData.appointmentTitle.filter(
            (title) => title !== services[position].title
          ),
      ],
      total: updatedCheckedState.reduce((sum, currentState, index) => {
        if (currentState === true) {
          return sum + services[index].price;
        }
        return sum;
      }, 0),
      numServices: updatedCheckedState.filter(Boolean).length,
    }))


  }

  const updateNails = (e) => {
    e.preventDefault();
    setFormData((prevFormData) => b({
      ...prevFormData,
      total: prevFormData.total != 50 ? prevFormData.total + 5 : 50,
      nails: prevFormData.nails != 10 ? prevFormData.nails + 1 : 10,
    }));
  };

  useEffect(() => {
    updateGlobalData({ formData });
    // console.log(globalData);
    console.log(formData);

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
            <div className="appointment__service-select" style={{ border: "none" }}>
              <div className="appointment__service">
                <div className="appointment__service-title">Drawings</div>
                <div className="appointment__service-duration">
                  number of nails
                </div>
                <div className="appointment__service-title">R5 per nail</div>
              </div>
              <div>
                <div className="nail">
                  <button onClick={updateNails}>
                    <span className="nail-btn">
                      <FontAwesomeIcon icon={faMinus} />
                    </span>
                  </button>
                  <div className="num_nails">{formData.nails}</div>
                  <button onClick={updateNails}>
                    <span className="nail-btn">
                      <FontAwesomeIcon icon={faPlus} />
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <CustomScroll>
              {services.map(({ title, price }, index) => (
                <div key={index}>
                  <div className="appointment__service-select" key={title} style={{
                    backgroundColor: checkedState[index] ? "#ac92bc" : "transparent", //update background if selected
                    color: checkedState[index] ? "#fff" : "#000",
                    borderRadius: "4px",
                    padding: "2px"
                  }}>
                    <div className="appointment__service">
                      <div>
                        <img className="appointment__services-img" src={designImg} alt="" /></div>
                      <div className="appointment__service-title">{title}</div>

                      <div className="appointment__service-description">Begins with a warm foot soak, includes all regular maintenance and finished with choice of regular polish.</div>

                      <div className="appointment__service-bot">
                        <div className="appointment__service-title">R{price} | 40min</div>
                        <div><button className="appointment__service-button" value={price} onClick={(e) => { handleSelect(e, index) }}>Select</button></div>
                      </div>
                    </div>
                    <div>
                      {/* <Checkbox
                        {...label}
                        value={price}
                        checked={checkedState[index]}
                        onChange={() => handleOnChange(event, index)} 
                      /> */}
                    </div>
                  </div>
                </div>
              ))}
            </CustomScroll>
          </div>
        </div>
        {formData.total !== 0 && (
          <div className="appointment__button">
            <div className="appointment__button-total">
              <div className="appointment__button-price">
                {formData.numServices ? formData.numServices : ""} Services
              </div>
              <div className="appointment__button-services">

                R{formData.total ? formData.total : 0}  - 1h 15min

              </div>
            </div>
            <div className="appointment__button-continue">
              <button>
                <Link
                  to="/date"
                  state={{ formData }}
                  style={{ color: "white" }}
                >
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
