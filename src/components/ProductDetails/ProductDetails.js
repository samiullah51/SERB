import React from "react";
import "./ProductDetails.css";
import StarIcon from "@mui/icons-material/Star";
import currencyFormatter from "currency-formatter";
function ProductDetails({ mode }) {
  return (
    <div className="product__details">
      {/* Header */}
      <div className="details__header">
        <div className="header_left">
          <p className="left__by">by - </p>
          <img className="profile__img" src="./images/sami.jpg" />
          <div className="by__info">
            <p className="info__name">Sami Samiullah</p>
            <p className="info__from">since jan-02-2022</p>
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
        <p className="product__title">Cannon-DSLR 12.3x</p>
        <p className="product__desc">
          Lorem ipsum is a placeholder text commonly used to demonstrate the
          visual form of a document or a typeface without relying on meaningful
          visual form of a document or a typeface without relying on meaningful
          content.
        </p>
        {mode === "exchange" ? (
          <p className="product__price">Condition</p>
        ) : (
          <p className="product__price">Price</p>
        )}
        {mode === "exchange" ? (
          <p className="price__value">Used</p>
        ) : (
          <p className="price__value">
            {currencyFormatter.format(1200, { code: "" })}
            <span>(PKR)</span>
          </p>
        )}

        <div className="body__footer">
          <p>2 days ago</p>
          <p>Dara adam khel, kohat</p>
        </div>
      </div>
      {/* Actions */}'
      {mode === "exchange" ? (
        <></>
      ) : (
        <div className="actions">
          <button className="buy__btn">Buy Now</button>
          <button className="favorite__btn">Add to favorite</button>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
