import React from "react";
import "./RecentProduct.css";
function RecentProduct({ product }) {
  return (
    <div className="recent__product">
      <img src={product.image} />
      <div>
        <p className="title">{product.title}</p>
        <p className="price">
          {product.price}
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
  );
}

export default RecentProduct;
