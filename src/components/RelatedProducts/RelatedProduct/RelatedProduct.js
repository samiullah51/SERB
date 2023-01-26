import React from "react";
import "./RelatedProduct.css";
import currencyFormatter from "currency-formatter";
import { Link } from "react-router-dom";

function RecentProduct({ product }) {
  return (
    <Link to="/register">
      <div className="recent__product">
        <img src={product.image} />
        <div>
          <p className="title">{product.title}</p>
          <p className="price">
            {currencyFormatter.format(product.price, { code: "" })}
            <span>(PKR)</span>
          </p>
        </div>
        <div className="product__from">
          <p>
            {product.address.length > 25
              ? product.address.slice(0, 25) + "..."
              : product.address}
          </p>
          <p>{product.createdAt}</p>
        </div>
      </div>
    </Link>
  );
}

export default RecentProduct;
