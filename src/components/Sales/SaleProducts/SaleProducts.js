import React from "react";
import "./SaleProducts.css";
function SaleProducts() {
  return (
    <div className="sale__products">
      <div
        className="single__sale__product"
        style={{ backgroundColor: "#3A6562" }}
      >
        <p>Total Products</p>
        <h1>18</h1>
      </div>
      <div
        className="single__sale__product"
        style={{ backgroundColor: "#20365A" }}
      >
        <p>Available Products</p>
        <h1>11</h1>
      </div>
      <div
        className="single__sale__product"
        style={{ backgroundColor: "#7A39A2" }}
      >
        <p>Sold Products</p>
        <h1>07</h1>
      </div>
      <div
        className="single__sale__product"
        style={{ backgroundColor: "#C23FBE" }}
      >
        <p>Pending Products</p>
        <h1>03</h1>
      </div>
    </div>
  );
}

export default SaleProducts;
