import React from "react";
import Gallary from "../../components/Gallary/Gallary";
import Navbar from "../../components/Navbar/Navbar";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import "./ExchangeProductDetail.css";
function ExchangeProductDetail() {
  return (
    <>
      <Navbar />
      <div className="exchange__product__detail">
        <div className="left">
          <Gallary />
          <ProductDetails mode="exchange" />
        </div>
        <div className="right">
          <p>Single Exchange products</p>
        </div>
      </div>
    </>
  );
}

export default ExchangeProductDetail;
