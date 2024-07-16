import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faMinus } from "@fortawesome/free-solid-svg-icons";
import GlobalContext from "../GlobalContext";
import emailjs from "@emailjs/browser";
import { services } from "../data";

const BookingForm = () => {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState();
  const { globalData } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("your service id", "template id", form.current, {
        publicKey: "your public key",
      })
      .then(
        () => {
          console.log("success!");
        },
        (error) => {
          console.log("Failed...", error.text);
        }
      );

    const form = useRef();

    // const formData = new FormData();
    // formData.append("name", "Orapeleng");
    // formData.append("phone", "0724514512");
    // formData.append("email", "pele1@gmail.com");
    // formData.append("message", "message");
    // formData.append("date", "given Date");
    // formData.append("time", "");

    // try {
    //   const response = fetch("/localhost:3000/upload", {
    //     method: "POST",
    //     body: formData,
    //   });
    // } catch (error) {
    //   console.log(error);
    //   // set err message
    //   setMessage("Error");
    // }
  };

  const { appointmentDate, appointmentTime, formData, services } = globalData;
  console.log("service in gd",globalData);
  return (
    <>
      <div className="bookform__header">
        <Link to="/date" style={{ color: "white" }}>
          <span>
            <FontAwesomeIcon className="angle-icon" icon={faAngleLeft} />
          </span>
        </Link>
        <div>3 / 3 Enter your details</div>
      </div>
      <div className="review">
        <div className="review__heading">Review your Booking</div>
        <div className="custom-hr "></div>
        <div className="table-row">
          <div>Location</div>
          <div>Odinburg Gardens</div>
        </div>
        <div className="custom-hr "></div>
        <div className="table-row">
          <div>Date</div>
          <div>{appointmentDate}</div>
        </div>
        <div className="custom-hr "></div>
        <div className="table-row">
          <div>Time</div>
          <div>{appointmentTime}</div>
        </div>
        <div className="custom-hr "></div>

        <div className="table">
          <div className="header-row">
            <div>ITEMS</div>
            <div>COSTS</div>
          </div>
          <div className="custom-hr "></div>
          <div className="table-body">
            {services.map((service, index) => (
              <div key={index}>
                <div className="table-row">
                  <div>{service.service}</div>
                  <div>{service.price}</div>
                </div>
              </div>
            ))}
            <div className="table-row">
              <div className="nail-tech">
                With <strong>Karabo Tlhopane</strong> @ {`${appointmentTime}`}
              </div>
            </div>

            <div className="table-row">
              <div>Total</div>
              <div>{`R${formData.total}`}</div>
            </div>
            <div className="custom-hr "></div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} method="post">
        <div className="contact">
          <div className="contact-header">Contact info</div>
          <div className="contact__group">
            <label htmlFor="">Fullname</label>
            <input type="text" name="username" />
          </div>
          <div className="contact__group">
            <label htmlFor="">Cell phone</label>
            <input type="text" name="phone" />
          </div>
          <div className="contact__group">
            <label htmlFor="">Email</label>
            <input type="email" name="email" onChange={(e) => e.target.value} />
          </div>
          <div className="contact__group">
            <label htmlFor="">Include a message (optional)</label>
            <textarea name="message" cols="30" rows="4"></textarea>
          </div>
          <button className="contact__bookbtn">Book</button>
        </div>
      </form>
    </>
  );
};

export default BookingForm;
