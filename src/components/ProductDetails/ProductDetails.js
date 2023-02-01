import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import StarIcon from "@mui/icons-material/Star";
import currencyFormatter from "currency-formatter";
import { publicRequest } from "../../requestMethods";
import * as timeago from "timeago.js";
import { SignalCellularAltSharp } from "@mui/icons-material";
import { loader } from "../../loader";
// Create formatter (English).
function ProductDetails({ mode, chatBtn, id }) {
  const [details, setDetails] = useState();
  const [loading, setLoading] = useState(false);
  // fetch product Details
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const fetched = await publicRequest.get(`/product/sell/details/` + id);
      setDetails(fetched.data);
      setLoading(false);
    };
    fetchData();
  }, [id]);
  let sinceJoin = new Date(details?.By.createdAt).toLocaleString("en-US", {
    day: "numeric",
    year: "numeric",
    month: "long",
  });

  return !loading ? (
    <div className="product__details">
      {/* Header */}
      <div className="details__header">
        <div className="header_left">
          <p className="left__by">by - </p>
          <img className="profile__img" src={details?.By.profileImage} />
          <div className="by__info">
            <p className="info__name">{details?.By.fullName}</p>
            <p className="info__from">Since {sinceJoin}</p>
          </div>
          <img
            className="level__img"
            src="https://static.vecteezy.com/system/resources/previews/004/946/876/non_2x/winner-badge-concepts-vector.jpg"
          />
        </div>
        <div className="header__right">
          <p>3.5</p>
          <StarIcon />
        </div>
      </div>
      {/* Body */}
      <div className="details__body">
        <p className="product__title">{details?.details.title}</p>
        <p className="product__desc">{details?.details.description}</p>
        {mode === "exchange" ? (
          <p className="product__price">{details?.details.condition}</p>
        ) : (
          <p className="product__price">Price</p>
        )}
        {mode === "exchange" ? (
          <p className="price__value">{details?.details.condition}</p>
        ) : (
          <p className="price__value">
            {currencyFormatter.format(details?.details.price, { code: "" })}
            <span>(PKR)</span>
          </p>
        )}

        <div className="body__footer">
          <p>{timeago.format(details?.details.createdAt)}</p>
          <p>{details?.details.location}</p>
        </div>
      </div>
      {/* Actions */}'
      {mode === "exchange" ? (
        chatBtn && <button className="chat__btn">Chat Now</button>
      ) : (
        <div className="actions">
          <button className="buy__btn">Buy Now</button>
          <button className="favorite__btn">Add to favorite</button>
        </div>
      )}
    </div>
  ) : (
    <div className="loader">
      <img src={loader} />
    </div>
  );
}

export default ProductDetails;
