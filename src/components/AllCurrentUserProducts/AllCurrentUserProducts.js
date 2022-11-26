import React from "react";
import "./AllCurrentUserProducts.css";
import { products } from "../../products";
import { exchangeProducts } from "../../exchangeProducts";
import SingleCurrentUserProduct from "./SingleCurrentUserProduct/SingleCurrentUserProduct";
function AllCurrentUserProducts({ mode }) {
  return (
    <div className="all__current__user__products">
      {mode === "sell"
        ? products.map((product) => (
            <SingleCurrentUserProduct product={product} mode={mode} />
          ))
        : exchangeProducts.map((product) => (
            <SingleCurrentUserProduct product={product} mode={mode} />
          ))}
    </div>
  );
}

export default AllCurrentUserProducts;
