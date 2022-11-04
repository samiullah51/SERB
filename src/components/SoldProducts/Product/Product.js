import React from "react";
import "./Product.css";
import currencyFormatter from "currency-formatter";

function SoldProduct({ product }) {
  return (
    <div className="sold__product">
      <img src={product.image} />
      <div>
        <p className="product__title">{product.title}</p>
        <p className="product__price">
          {currencyFormatter.format(product.price, { code: "" })}
          <span>(PKR)</span>
        </p>
      </div>
    </div>
  );
}

export default SoldProduct;
