import React, { useEffect, useState } from "react";
import "./AllCurrentUserProducts.css";
import SingleCurrentUserProduct from "./SingleCurrentUserProduct/SingleCurrentUserProduct";
import { publicRequest } from "../../requestMethods";
import { useSelector } from "react-redux";

function AllCurrentUserProducts({ mode }) {
  const user = useSelector((state) => state.user);
  const [products, setProducts] = useState([]);
  const [exchangeProducts, setExchangeProducts] = useState([]);
  // loading
  const [loading, setLoading] = useState(false);
  // fetch all product of current user
  useEffect(() => {
    setLoading(true);
    const getProducts = async () => {
      try {
        const fechedProducts = await publicRequest.get(
          `/product/sell/all/${user._id}`
        );
        setProducts(fechedProducts.data.allProducts);
        setLoading(false);
      } catch (err) {
        console.log(err.response.data);
      }
    };
    getProducts();
  }, [products]);

  // fetch all Exchange product of current user
  useEffect(() => {
    setLoading(true);
    const getProducts = async () => {
      try {
        const fechedProducts = await publicRequest.get(
          `/exchangeproduct/exchange/all/${user._id}`
        );
        setExchangeProducts(fechedProducts.data.allProducts);
        setLoading(false);
      } catch (err) {
        console.log(err.response.data);
      }
    };
    getProducts();
  }, [products]);

  return products.length === 0 ? (
    <h2 style={{ textAlign: "center", color: "#d4d4d4" }}>No Product Yet</h2>
  ) : (
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
