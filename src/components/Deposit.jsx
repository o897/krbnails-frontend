import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Deposit = () => {
  return (
    <>
      {/* <div>Deposit</div>
        <hr /> */}
      {/* <button>South African Rands</button> */}
      <div className="payment">
        <div className="payment__title">Deposit ZAR - South African Rands</div>
        <div className="payment__content">
          <div className="payment__sub">
            You can easily deposit <strong>money</strong> into our account. You
            can also use our PayShap.
          </div>
          <div className="payment__details">
            Always use your phone number as a reference number else we wont be
            able to trace your payment
          </div>

          <div className="payment__minimum">
            Please note. There is a minimum deposi amount of R150.
          </div>

          <div className="payment__bank-account">
            <div>
              Bank : <strong>Capitec</strong>
            </div>
            <div>
              Account : 54564564<strong></strong>
            </div>
            <div>
              Branch code : 21515<strong></strong>
            </div>
            <div>
              Account number : 89484544<strong></strong>
            </div>
            <div>
              Reference: <strong>Your contact number</strong>
            </div>
          </div>

          <div className="please__note">
          <div className="please__note-detail">
            <strong>Please note</strong>
          </div>
            <ul>
              <li>
                1. Deposit from your capitec to our capitec account is can
                whatever
              </li>
              <li> 2. Payments using payshap appear immeditley.</li>
              <li> 3. Kindly double-check the account details provided before initiating your deposit.</li>
              <li> 4. Note that deposits made after the specified cut-off time may be processed on the following business day.</li>
              <li> 5.Kindly double-check the account details provided before initiating your deposit.</li>

            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Deposit;
