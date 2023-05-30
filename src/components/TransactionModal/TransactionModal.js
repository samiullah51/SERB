import React from "react";
import { useState } from "react";

function TransactionModal({ setModal, product }) {
  const status = "Confirmed";
  return (
    <div className="transaction__modal">
      <div className="close__modal" onClick={() => setModal(false)}>
        X
      </div>
      {/* product Details */}
      <div className="transaction__details">
        <img src={product.photo} />
        <div className="details__others">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <h1>
            {product.price} <span> (PKR)</span>{" "}
          </h1>
          <div
            className="status"
            style={{
              backgroundColor:
                product.status === "Pending" || "pending"
                  ? "#EE63AE"
                  : "#4FDA86",
            }}
          >
            {product.status}
          </div>
          <div className="location">
            <h1>Address: </h1>
            <p>{product.location}</p>
          </div>
        </div>
        <p className="closeBtn" onClick={() => setModal(false)}>
          Close
        </p>
      </div>
    </div>
  );
}

export default TransactionModal;
