import React from "react";
import { useState } from "react";

function BuyerModal({ setModal }) {
  return (
    <div className="transaction__modal">
      <div className="close__modal" onClick={() => setModal(false)}>
        X
      </div>
      {/* product Details */}
      <div className="transaction__details">
        <img src="https://myportfolio-as-mern-stack.netlify.app/images/mypic3.jpg" />
        <div className="details__others">
          <h1>Sami Samiullah</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
            quibusdam obcaecati autem odit, ratione quasi distinctio aliquid
            repellat ipsa dolorem numquam cupiditate nostrum soluta assumenda
            optio cum placeat esse. Delectus?
          </p>
          <h1>
            Level <span> 1</span>{" "}
          </h1>

          <div className="location">
            <h1>Rating: </h1>
            <p>5.4 Stars</p>
          </div>
        </div>
        <p className="closeBtn" onClick={() => setModal(false)}>
          Close
        </p>
      </div>
    </div>
  );
}

export default BuyerModal;
