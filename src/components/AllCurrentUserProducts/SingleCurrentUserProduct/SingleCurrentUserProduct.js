import React, { useState } from "react";
import "./SingleCurrentUserProduct.css";
import currencyFormatter from "currency-formatter";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { publicRequest, userRequest } from "../../../requestMethods";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

function SingleCurrentUserProduct({ product }) {
  const [modal, setModal] = useState(false);

  // since join
  let productDate = new Date(product?.createdAt).toLocaleString("en-US", {
    day: "numeric",
    year: "numeric",
    month: "long",
  });

  // handleremove
  const removeProduct = async () => {
    const confirmation = window.confirm(
      "This product will be deleted parmanently."
    );
    if (confirmation) {
      try {
        const products = await userRequest.delete(
          `/product/sell/delete/${product._id}`
        );
        setModal(false);
      } catch (err) {
        console.log(err.response.data);
      }
    } else {
      setModal(false);
    }
  };

  // handle Status
  const handleStatus = async (status) => {
    try {
      status === "avaiable"
        ? (await userRequest.put(`/product/sell/edit/status/${product._id}`, {
            status,
          })) && setModal(false)
        : (await userRequest.put(`/product/sell/edit/status/${product._id}`, {
            status,
          })) && setModal(false);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <div className="single__current__user__product">
      <img src={product.photos[0]} />
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
      <p className="createdAt">{productDate}</p>
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
              <p onClick={removeProduct}>Delete</p>
              <Link to={`/editproduct/${product._id}`}>
                <p>Edit</p>
              </Link>
              {product.status === "sold" ? (
                <p onClick={() => handleStatus("available")}>
                  Mark as AVAILABLE
                </p>
              ) : (
                <p onClick={() => handleStatus("sold")}>Mark as SOLD</p>
              )}
            </>
          )}

          <CloseIcon onClick={() => setModal(false)} />
        </div>
      )}
    </div>
  );
}

export default SingleCurrentUserProduct;
