import React, { useEffect, useState } from "react";
import "./SoldProducts.css";
import { products } from "../../products";
import Product from "./Product/Product";
import { publicRequest } from "../../requestMethods";
function SoldProducts({ userDetails }) {
  const [soldProducts, setSoldProducts] = useState([]);
  const [avaiableProducts, setAvaiableProducts] = useState([]);
  console.log("from details", userDetails._id);
  // fetch all the product of selected user
  useEffect(() => {
    const fetchData = async () => {
      const fetched = await publicRequest.get(
        `/product/sell/all/${userDetails._id}`
      );
      setSoldProducts(fetched.data.soldProducts);
      setAvaiableProducts(fetched.data.avaiableProducts);
    };
    fetchData();
  }, [userDetails]);
  console.log(soldProducts);
  return (
    <div className="sold__products">
      <p className="title">Sold Products ({soldProducts?.length})</p>
      <div className="product__sold">
        {soldProducts?.map((product) => (
          <Product product={product} />
        ))}
      </div>
      <div className="product__available">
        <p className="title">Available Products ({avaiableProducts?.length})</p>
        <div className="product__sold">
          {avaiableProducts?.map((product) => (
            <Product product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SoldProducts;
