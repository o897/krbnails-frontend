import React, { useContext, useState } from "react";
import { services } from "../data";
import { Link } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import { CustomScroll } from "react-custom-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleLeft,faMinus,faPlus} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import GlobalContext from "../GlobalContext";

const BookService = () => {
  const {globalData,updateGlobalData} = useContext(GlobalContext)
  
  // replace form data with global data
  const [service,setService] = useState([])
  const [formData, setFormData] = useState({
    appointmentTitle: {},
    appointmentDuration: "",
    total: 0,
    numServices: 0,
    checkedState: new Array(services.length).fill(false),
    nails : 0
  });

  const [checkedState, setCheckedState] = useState(
    new Array(services.length).fill(false)
  );

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  // if checked add them to the array if check is false filter them out
  const handleOnChange = (event, position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    setService((prevService) => (
      [...prevService,
      event.target.checked
      ? {service : services[position].title,price : services[position].price}
      : service.appointmentTitle.filter(
          (title) => title !== services[position].title
        )] 
    ))
     

    setFormData((prevFormData) => ({
      ...prevFormData,
      appointmentTitle: event.target.checked
      ? {...prevFormData.appointmentTitle, service : services[position].title,price : services[position].price}
      : prevFormData.appointmentTitle.filter(
          (title) => title !== services[position].title
        ),
      numServices: updatedCheckedState.reduce((sum, currentState) => {
        if (currentState === true) {
          return sum + 1;
        }
        return sum;
      }, 0),
      total: updatedCheckedState.reduce((sum, currentState, index) => {
        if (currentState === true) {
          return sum + services[index].price;
        }
        return sum;
      }, 0),
    }));
    
  };

  const minusNails = (e) => {
    e.preventDefault();
    setFormData((prevFormData) => (
      {
        ...prevFormData, 
        total : prevFormData.nails != 0 ? prevFormData.total - 5 : 0,
        nails : prevFormData.nails != 0 ? prevFormData.nails - 1 : 0
      }
    ))
    console.log("nails",formData.nails);

  };

  const addNails = (e) => {
    e.preventDefault();
    setFormData((prevFormData) => (
      {
        ...prevFormData, 
        total : prevFormData.total != 50 ? prevFormData.total + 5 : 50,
        nails : prevFormData.nails != 10 ? prevFormData.nails + 1 : 10
      }
    ))
    console.log("nails",formData.nails);

  };

  useEffect(() => {
    updateGlobalData({services : service})
    updateGlobalData({formData})
  }, [formData,service]);
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
            <div className="appointment__head-title">Select Service</div>
            <div className="appointment__services">
              <div className="appointment__service-select">
                <div className="appointment__service">
                  <div className="appointment__service-title">Drawings</div>
                  <div className="appointment__service-duration">
                    number of nails
                  </div>
                  <div className="appointment__service-title">R5 per nail</div>
                </div>
                <div>
                  <div className="nail">
                    <button onClick={minusNails}>
                      <span className="nail-btn">
                        <FontAwesomeIcon icon={faMinus} />
                      </span>
                    </button>
                    <div className="num_nails">{formData.nails}</div>
                    <button onClick={addNails}>
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
                    <div className="appointment__service-select" key={title}>
                      <div className="appointment__service">              
                        <div className="appointment__service-title">
                          {title}
                        </div>
                        <div className="appointment__service-duration">
                          1h - 1h:15min
                        </div>
                        <div className="appointment__service-title">
                          R{price}
                        </div>
                      </div>
                      <div>
                        <Checkbox
                          {...label}
                          value={price}
                          checked={checkedState[index]}
                          onChange={() => handleOnChange(event, index)}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </CustomScroll>
            </div>
          </div>
          {formData.total !== 0 && <div className="appointment__button">
            <div className="appointment__button-total">
              <div className="appointment__button-price">
                R{formData.total ? formData.total : 0}
              </div>
              <div className="appointment__button-services">
                {formData.totalService} Services - 1h 15min
              </div>
            </div>
           <div className="appointment__button-continue">
              <button>
                <Link
                  to="/date"
                  state={{ formData }}
                  style={{ color: "white" }}
                >
                  Continue
                </Link>
              </button>
            </div>
          </div>}
        </form>
    </>
  );
};

export default BookService;
