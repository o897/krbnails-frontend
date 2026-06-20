import React from "react";
import confirm from "../assets/confirmation.svg";
import { Link } from "react-router-dom";

function Confirmation() {
  return (
    <>
      <div className="confirmation">
        <h2>Your Booking has been made</h2>
        <span style={{ textAlign: 'center' , fontWeight: '700'}}>
          To reserve your booking, make a payment within 10 minutes.
        </span>        
        <span>
          <strong>Account :</strong> 187 590 8909<br />
          <strong>Bank name : </strong> Capitec <br />
          <strong>Reference :</strong> Name + contact no
        </span>
        <p>Immadiate Payments</p>
        <span><strong>PayShap ID : </strong> +27824066527@CAPITEC</span>
        <span>Send your proof of payment to 824065421</span>
        <img className="confirmation-img" src={confirm} alt="" />

        <button className="button-confirm">
          <Link to="/">Home</Link>
        </button>
      </div>
    </>
  );
}

export default Confirmation;
