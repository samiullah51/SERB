import React from "react";
import "./RecentProducts.css";
import { products } from "../../products";
import RecentProduct from "./RecentProduct/RecentProduct";
function RecentProducts({ title, items }) {
  return (
    <div className="recent__products">
      <h1>{title}</h1>
      <div className="products__container">
        {products.slice(0, items).map((product) => (
          <RecentProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default RecentProducts;
