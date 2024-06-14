import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faMinus } from "@fortawesome/free-solid-svg-icons";
import GlobalContext from "../GlobalContext";
const BookingForm = () => {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [message,setMessage] = useState();
  const {globalData} = useContext(GlobalContext)
 
  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("name", "Orapeleng");
    formData.append("phone", "0724514512");
    formData.append("email", "pele1@gmail.com");
    formData.append("message", "message");
    formData.append("date","given Date");
    formData.append("time","")

    try {
       const response = fetch("/localhost:3000/upload", {
      method: "POST",
      body: formData,
    });
    } catch (error) {
      console.log(error);
      // set err message
      setMessage("Error")
    }

  };

  console.log(globalData);
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
          <div>Friday, Apr 6, 2024</div>
        </div>
        <div className="custom-hr "></div>
        <div className="table-row">
          <div>Time</div>
          <div>14:00pm</div>
        </div>
        <div className="custom-hr "></div>

        <div className="table">
          <div className="header-row">
            <div>ITEMS</div>
            <div>COSTS</div>
          </div>
          <div className="custom-hr "></div>
          <div className="table-body">
            <div className="table-row">
              <div>Manicure</div>
              <div>R20.5</div>
            </div>
            {/* <div className="table-row">
              <div>Acrylic</div>
              <div>R20.5</div>
            </div> */}
            <div className="table-row">
              <div className="nail-tech">
                With <strong>Karabo Tlhopane</strong> @ 12:30pm
              </div>
            </div>

            <div className="table-row">
              <div>Total</div>
              <div>R120</div>
            </div>
            <div className="custom-hr "></div>
          </div>
        </div>
      </div>

      <div className="contact">
        <div className="contact-header">Contact info</div>
        <div className="contact__group">
          <label htmlFor="">Fullname</label>
          <input type="text" />
        </div>
        <div className="contact__group">
          <label htmlFor="">Cell phone</label>
          <input type="text" />
        </div>
        <div className="contact__group">
          <label htmlFor="">Email</label>
          <input type="email" />
        </div>
        <div className="contact__group">
          <label htmlFor="">Include a message (optional)</label>
          <textarea name="" id="" cols="30" rows="4"></textarea>
        </div>
        <button className="contact__bookbtn">Book</button>
      </div>
    </>
  );
};

export default BookingForm;
