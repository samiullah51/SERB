import React from "react";
import "./AllCurrentUserProducts.css";
import { products } from "../../products";
import SingleCurrentUserProduct from "./SingleCurrentUserProduct/SingleCurrentUserProduct";
function AllCurrentUserProducts() {
  return (
    <div className="all__current__user__products">
      {products.map((product) => (
        <SingleCurrentUserProduct product={product} />
      ))}
    </div>
  );
}

export default AllCurrentUserProducts;
