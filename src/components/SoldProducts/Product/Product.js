import React from "react";
import "./Product.css";
import currencyFormatter from "currency-formatter";
import { Link } from "react-router-dom";

function SoldProduct({ product }) {
  return (
    <Link to={`/product/${product._id}`} className="sold__product">
      <img src={product.photos[0]} />
      <div>
        <p className="product__title">
          {product.title.length < 16
            ? product.title
            : product.title.slice(0, 15) + "..."}
        </p>
        <p className="product__price">
          {currencyFormatter.format(product.price, { code: "" })}
          <span>(PKR)</span>
        </p>
      </div>
    </Link>
  );
}

export default SoldProduct;
