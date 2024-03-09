import { Button } from "@mui/material"
import { Link } from "react-router-dom"


const Deposit = () => {
    return (
        <>
        <div>Deposit</div>
        <hr />
        <button>South African Rands</button>
        <div className="payment">
            <div className="payment__title">
                Deposit ZAR - South African Rands
            </div>

            <div className="payment__details">
                Always use your phone number as a reference number else we wont be able to trace your payment
            </div>

            <div className="payment__bank">
                Please note. There is a minimum deposi amount of R100
            </div>

            <div className="payment__bank-account">
                <div>Bank: </div>
                Account:
                Branch code :
                Account number :
                Reference: your contact number
            </div>

            <div className="please__note">
                <div className="please__note-detail">
                    1. Deposit from your capitec to our capitec account is can whatever
                </div>
            </div>

        </div>
    </>
    )
   
}

export default Deposit

