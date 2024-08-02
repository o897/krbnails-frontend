import React from "react";
import confirm from "../assets/confirmation.svg";
import { Link } from "react-router-dom";

function Confirmation() {
  return (
    <>
      <div className="confirmation">
        <h2>Your Booking has been made</h2>
        <span><strong>To reserve your booing make a payment within the next hour.</strong></span>
        <span>

        <strong>Account :</strong> 8468 89894 89465 <br/>
        <strong>Bank name : </strong>Capitec <br/>
        <strong>Reference :</strong>  Your contact
        </span>

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
