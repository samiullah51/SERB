import React from "react";
import "./PaymentCard.css"; // Import your CSS file

const PaymentCard = ({ setShow }) => {
  return (
    <div className="payment_card">
      <div className="amount">
        <p>Pay for</p>
        <h1>Smart Watch</h1>
        <p>Amount</p>
        <h1>12,000</h1>
      </div>
      <div className="card">
        <input type="text" />
        <input type="date" />
        <input type="number" />
      </div>
      {/* <button onClick={() => setShow(false)}>Close</button> */}
    </div>
  );
};

export default PaymentCard;
