import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Gallary from "../../components/Gallary/Gallary";
import "./Product.css";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import RecentProducts from "../../components/RecentProducts/RecentProducts";
import Footer from "../../components/Footer/Footer";
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";
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
      <RelatedProducts title="Related Products" items={4} />
      <Footer />
    </div>
  );
}

export default Product;
