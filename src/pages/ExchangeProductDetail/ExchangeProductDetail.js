import Search from "@mui/icons-material/Search";
import React from "react";
import ExchangeProduct from "../../components/ExchangeProduct/ExchangeProduct";
import Gallary from "../../components/Gallary/Gallary";
import Navbar from "../../components/Navbar/Navbar";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import "./ExchangeProductDetail.css";
import { exchangeProducts } from "../../exchangeProducts";
function ExchangeProductDetail() {
  return (
    <>
      <Navbar />
      <div className="exchange__product__detail">
        {/* Left */}
        <div className="left">
          <Gallary />
          <ProductDetails mode="exchange" />
        </div>
        {/* Right */}
        <div className="right">
          <p className="right__title">Exchange Your Product With</p>
          <div className="right__input">
            <input type="text" placeholder="Search here..." />
            <Search />
          </div>
          {/* Exchange Product */}
          <div className="exchange__products">
            {exchangeProducts.map((product) => (
              <ExchangeProduct key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ExchangeProductDetail;
