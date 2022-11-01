import React from "react";
import "./RecentProduct.css";
function RecentProduct({ product }) {
  return (
    <div className="recent__product">
      <img src={product.image} />
      <p>{product.title}</p>
      <p>{product.price}</p>
      <div className="product__from">
        <p>{product.address}</p>
        <p>{product.createdAt}</p>
      </div>
    </div>
  );
}

export default RecentProduct;
