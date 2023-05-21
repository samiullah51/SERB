import React, { useState } from "react";
import "./PaymentCard.css"; // Import your CSS file
import { Link } from "react-router-dom";
// import paid from "../../../public/images/paid.png";
const PaymentCard = ({ setShow, product }) => {
  const [inputValue, setInputValue] = useState("");
  const [isPaid, setIsPaid] = useState(false);
  const [cvv, setCvv] = useState("");
  const handleInputChange = (e) => {
    const enteredValue = e.target.value;

    // Remove any non-digit characters
    const digitsOnly = enteredValue.replace(/\D/g, "");

    // Limit the input length
    const maxLength = 16; // Maximum allowed length of digits
    const limitedValue = digitsOnly.slice(0, maxLength);

    // Update the input value state
    setInputValue(limitedValue);
  };
  const handleCvv = (e) => {
    const enteredValue = e.target.value;

    // Remove any non-digit characters
    const digitsOnly = enteredValue.replace(/\D/g, "");

    // Limit the input length
    const maxLength = 3; // Maximum allowed length of digits
    const limitedValue = digitsOnly.slice(0, maxLength);

    // Update the input value state
    setCvv(limitedValue);
  };
  return !isPaid ? (
    <div className="payment_card">
      <p className="paymentcard">Payment Card</p>
      <div className="amount">
        <p>Pay for</p>
        <h1>{product.title}</h1>
        <p>Amount</p>
        <h1>
          {product.price} <span style={{ fontSize: "16px" }}> (PKR)</span>{" "}
        </h1>
      </div>
      <div className="card">
        <div className="singleinput">
          <label htmlFor="">Card Number (16 Digits) </label>
          <input
            type="number"
            value={inputValue}
            maxLength={16}
            onInput={handleInputChange}
            autoFocus
          />
        </div>
        <div className="card2">
          <div className="singleinput">
            <label htmlFor="">Expiry date</label>
            <input type="date" id="date" />
          </div>
          <div className="singleinput cvv">
            <label htmlFor="">CVV (3 Digits)</label>
            <input
              type="number"
              value={cvv}
              maxLength={3}
              onInput={handleCvv}
              id="ccv"
              placeholder="CVV"
            />
          </div>
        </div>
      </div>
      <div className="btns">
        <button className="cancel" onClick={() => setShow(false)}>
          Cancel
        </button>
        <button className="pay" onClick={() => setIsPaid(true)}>
          Pay Now
        </button>
      </div>
    </div>
  ) : (
    <div className="paid">
      <h1>You have paid Successfully</h1>
      <img src="../../images/paid.png" alt="" />
      <Link>Check Transactions</Link>
      <p>
        Your payment is safe with SERB right now. You will recieve your product
        soon.
      </p>
      <Link onClick={() => setShow(false)}>OK</Link>
    </div>
  );
};

export default PaymentCard;
