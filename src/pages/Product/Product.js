import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Gallary from "../../components/Gallary/Gallary";
import "./Product.css";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import RecentProducts from "../../components/RecentProducts/RecentProducts";
function Product() {
  return (
    <div className="product">
      <Navbar />
      <div className="product__container">
        <div className="container__left">
          <Gallary />
        </div>
        <div className="container__right">
          <ProductDetails />
        </div>
      </div>
      <RecentProducts title="Related Products" items={4} />
    </div>
  );
}

export default Product;
