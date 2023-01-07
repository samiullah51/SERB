import React from "react";
import "./SoldProducts.css";
import { products } from "../../products";
import Product from "./Product/Product";
function SoldProducts() {
  return (
    <div className="sold__products">
      <p className="title">Sold Products (3)</p>
      <div className="product__sold">
        {products.slice(0, 3).map((product) => (
          <Product product={product} />
        ))}
      </div>
      <div className="product__available">
        <p className="title">Available Products (6)</p>
        <div className="product__sold">
          {products.slice(2, 8).map((product) => (
            <Product product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SoldProducts;
