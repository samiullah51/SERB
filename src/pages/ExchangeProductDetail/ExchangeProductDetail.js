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
  const [category, setCategory] = useState("");
  // loading
  const [loading, setLoading] = useState(false);
  // get product category
  useEffect(() => {
    const getCat = async () => {
      const gotCat = await userRequest.get(
        `/exchangeproduct/exchange/details/${productId}`
      );
      setCategory(gotCat.data.details.category);
    };
    getCat();
  }, [productId]);

  // fetch all exchange related products
  useEffect(() => {
    setLoading(true);
    const fetch = async () => {
      const fetched = await userRequest.get(
        `/exchangeproduct/exchange/relatedproducts?category=${category}`
      );
      setExchangeProducts(fetched.data);
      setLoading(false);
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
          {!loading ? (
            <div className="exchange__products">
              {exchangeProducts.map((product) => (
                <ExchangeProduct key={product._id} product={product} />
              ))}
            </div>
          ) : (
            <h1>Loading....</h1>
          )}
        </div>
      </div>
    </>
  );
}

export default ExchangeProductDetail;
