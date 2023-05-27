import React from "react";
import { useState } from "react";

function TransactionModal({ setModal }) {
  const status = "Confirmed";
  return (
    <div className="transaction__modal">
      <div className="close__modal" onClick={() => setModal(false)}>
        X
      </div>
      {/* product Details */}
      <div className="transaction__details">
        <img src="https://th.bing.com/th/id/OIP.SbFcUmrpAZixqahRxnvrrQHaHa?pid=ImgDet&rs=1" />
        <div className="details__others">
          <h1>Bicycle</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
            quibusdam obcaecati autem odit, ratione quasi distinctio aliquid
            repellat ipsa dolorem numquam cupiditate nostrum soluta assumenda
            optio cum placeat esse. Delectus?
          </p>
          <h1>
            12,000 <span> (PKR)</span>{" "}
          </h1>
          <div
            className="status"
            style={{
              backgroundColor: status === "Pending" ? "#EE63AE" : "#4FDA86",
            }}
          >
            {status}
          </div>
          <div className="location">
            <h1>Address: </h1>
            <p>Pabbi Station, NSR</p>
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
