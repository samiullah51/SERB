import React, { useState } from "react";
import "./SingleCurrentUserProduct.css";
import currencyFormatter from "currency-formatter";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function SingleCurrentUserProduct({ product }) {
  const [modal, setModal] = useState(false);

  return (
    <div className="single__current__user__product">
      <img src={product.image} />
      <p className="title">{product.title}</p>
      <p className="price">
        {currencyFormatter.format(product.price, { code: "" })}
        <span>(PKR)</span>
      </p>
      <p
        className="status"
        style={
          product.status === "sold" || product.status === "exchanged"
            ? { backgroundColor: "#4D4D4D" }
            : { backgroundColor: "#138D95" }
        }
      >
        {product.status}
      </p>
      <p className="createdAt">01-Jan-2022</p>
      {/* more icon */}
      <MoreVertIcon onClick={() => setModal(!modal)} />
      {modal && (
        <div className="modal">
          <p>Remove</p>
          <p>Edit</p>
          <p className="close" onClick={() => setModal(false)}>
            &times;
          </p>
        </div>
      )}
    </div>
  );
}

export default SingleCurrentUserProduct;
