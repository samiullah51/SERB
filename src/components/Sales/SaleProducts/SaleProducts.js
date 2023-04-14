import React from "react";
import "./SaleProducts.css";
import { Link } from "react-router-dom";
function SaleProducts() {
  return (
    <div className="sale__products">
      <Link
        className="single__sale__product"
        style={{ backgroundColor: "#3A6562" }}
        to="/analytics/totalproducts"
      >
        <p>Total Products</p>
        <h1>18</h1>
      </Link>
      <Link
        className="single__sale__product"
        style={{ backgroundColor: "#20365A" }}
        to="/analytics/availableproducts"
      >
        <p>Available Products</p>
        <h1>11</h1>
      </Link>
      <Link
        className="single__sale__product"
        style={{ backgroundColor: "#7A39A2" }}
        to="/analytics/soldproducts"
      >
        <p>Sold Products</p>
        <h1>07</h1>
      </Link>
      <Link
        className="single__sale__product"
        style={{ backgroundColor: "#C23FBE" }}
      >
        <p>Pending Products</p>
        <h1>03</h1>
      </Link>
    </div>
  );
}

export default SaleProducts;
