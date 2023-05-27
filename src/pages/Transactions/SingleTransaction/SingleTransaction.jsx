import React from "react";
import "./SingleTransaction.css";
import { useState } from "react";
function SingleTransaction() {
  const [modal, setModal] = useState(false);

  const status = "Confirmed";
  return (
    <div className="single__transaction">
      <div className="transaction">ff</div>
      <p>0x23dffs232443355</p>
      <p>33-Jan-2023</p>
      <p>12,000</p>
      <p className="details__btn">Product Details</p>
      <p
        className="transaction__status"
        style={{
          backgroundColor: status === "Pending" ? "#EE63AE" : "#4FDA86",
        }}
      >
        {status}
      </p>
      <div className="actions">
        <button className="confirm__btn">Confirm</button>
        <button className="cancel__btn">Cancel</button>
      </div>
    </div>
  );
}

export default SingleTransaction;
