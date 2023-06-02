import React from "react";
import { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
function TransactionModal({ setModal, product }) {
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
                product.status !== "Sold" ? "#EE63AE" : "#4FDA86",
            }}
          >
            {product.status}
          </div>
          <div className="location">
            <h1>Address: </h1>
            <p>{product.location}</p>
          </div>
        </div>
        {/* belongs to */}
        <h1>Owner</h1>
        <div className="belongsto">
          <div className="belongsto__info">
            <img src={product.belongsToPicture} />
            <p>{product.belongsToName}</p>
          </div>
          <div className="stars">
            <p>({product.belongsToRating}) </p>

            {Array.from({ length: 5 }, (_, index) => {
              let number = index + 0.5;
              return (
                <p>
                  {product.belongsToRating >= index + 1 ? (
                    <StarIcon />
                  ) : product.belongsToRating >= number ? (
                    <StarHalfIcon />
                  ) : (
                    <StarOutlineIcon />
                  )}
                </p>
              );
            })}
          </div>
        </div>

        <p className="closeBtn" onClick={() => setModal(false)}>
          X
        </p>
      </div>
    </div>
  );
}

export default TransactionModal;
