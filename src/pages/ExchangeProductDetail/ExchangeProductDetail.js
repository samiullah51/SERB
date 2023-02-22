import Search from "@mui/icons-material/Search";
import React, { useEffect, useState } from "react";
import ExchangeProduct from "../../components/ExchangeProduct/ExchangeProduct";
import Gallary from "../../components/Gallary/Gallary";
import Navbar from "../../components/Navbar/Navbar";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import "./ExchangeProductDetail.css";
import { useParams } from "react-router";
import ExchangeProductDetails from "../../components/ProductDetails/ExchangeDetails";
import ExchangeGallary from "../../components/Gallary/ExchangeGallary";
import { userRequest } from "../../requestMethods";
function ExchangeProductDetail({ id }) {
  const { productId } = useParams();
  const [exchangeProducts, setExchangeProducts] = useState([]);
  // fetch all exchange products

  useEffect(() => {
    const fetch = async () => {
      const fetched = await userRequest.get(`/exchangeproduct/exchange/all`);
      setExchangeProducts(fetched.data);
    };
    fetch();
  }, []);
  return (
    <>
      <Navbar />
      <div className="exchange__product__detail">
        {/* Left */}
        <div className="left">
          <ExchangeGallary id={productId} />
          <ExchangeProductDetails id={productId} mode="exchange" />
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
              <ExchangeProduct key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ExchangeProductDetail;
