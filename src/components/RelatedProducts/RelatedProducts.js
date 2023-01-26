import React from "react";
import "./RelatedProducts.css";
import { products } from "../../products";
import RelatedProduct from "./RelatedProduct/RelatedProduct";
function RecentProducts({ title, items }) {
  return (
    <div className="recent__products">
      <h1>{title}</h1>
      <div className="products__container">
        {products.slice(1, items).map((product) => (
          <RelatedProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default RecentProducts;
