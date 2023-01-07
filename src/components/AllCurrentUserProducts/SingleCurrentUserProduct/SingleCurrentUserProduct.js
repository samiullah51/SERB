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
      {product.condition && <p className="title">{product.condition}</p>}
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
        {product.status.toUpperCase()}
      </p>
      <p className="createdAt">01-Jan-2022</p>
      {/* more icon */}
      <MoreVertIcon onClick={() => setModal(!modal)} />
      {modal && (
        <div className="modal">
          {product.status == "exchange" ? (
            <>
              <p>Remove</p>
              <p>Mark as Exchange</p>
              <p>Edit</p>
            </>
          ) : (
            <>
              <p>Remove</p>
            </>
          )}

          <p className="close" onClick={() => setModal(false)}>
            &times;
          </p>
        </div>
      )}
      </div>
  );
}

export default SingleCurrentUserProduct;
