import React from "react";
import "./RecentProducts.css";
import { products } from "../../products";
import RecentProduct from "./RecentProduct/RecentProduct";
function RecentProducts() {
  return (
    <div className="recent__products">
      <h1>Recent Products</h1>
      <div className="products__container">
        {products.map((product) => (
          <RecentProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default RecentProducts;
