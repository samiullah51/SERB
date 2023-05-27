import React from "react";
import "./SingleTransaction.css";
function SingleTransaction() {
  const status = "Pending";
  return (
    <div className="single__transaction">
      <p>0x23dffs232443355</p>
      <p>33-Jan-2023</p>
      <p>12,000</p>
      <p className="details__btn product">Product Details</p>
      <p className="details__btn buyer">Buyer Details</p>
      <p
        className="transaction__status"
        style={{
          backgroundColor: status === "Pending" ? "#EE63AE" : "#4FDA86",
        }}
      >
        {status}
      </p>
    </div>
  );
}

export default SingleTransaction;
