import React, { useEffect, useState } from "react";
import "./AllCurrentUserProducts.css";
import { exchangeProducts } from "../../exchangeProducts";
import SingleCurrentUserProduct from "./SingleCurrentUserProduct/SingleCurrentUserProduct";
import { publicRequest } from "../../requestMethods";
import { useSelector } from "react-redux";

function AllCurrentUserProducts({ mode }) {
  const user = useSelector((state) => state.user);

  const [products, setProducts] = useState([]);

  // fetch all product of current user
  useEffect(() => {
    const getProducts = async () => {
      try {
        const products = await publicRequest.get(
          `/product/sell/all/${user._id}`
        );
        setProducts(products.data);
      } catch (err) {
        console.log(err.response.data);
      }
    };
    getProducts();
  }, [products]);

  return (
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
