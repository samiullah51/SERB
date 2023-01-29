import React from "react";
import "./RecentProduct.css";
import currencyFormatter from "currency-formatter";
import { Link } from "react-router-dom";
import * as timeago from "timeago.js";

function RecentProduct({ product }) {
  return (
    <Link to={`product/${product._id}`}>
      <div className="recent__product">
        <img src={product.photos[0]} />
        <div>
          <p className="title">{product.title}</p>
          <p className="price">
            {currencyFormatter.format(product.price, { code: "" })}
            <span>(PKR)</span>
          </p>
        </div>
        <div className="product__from">
          <p>
            {product.location.length > 25
              ? product.location.slice(0, 25) + "..."
              : product.location}
          </p>
          <p>{timeago.format(product.createdAt)}</p>
        </div>
      </div>
    </Link>
  );
}

export default RecentProduct;
