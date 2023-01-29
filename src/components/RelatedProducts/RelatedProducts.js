import React, { useEffect, useState } from "react";
import "./RelatedProducts.css";
import { products } from "../../products";
import RelatedProduct from "./RelatedProduct/RelatedProduct";
import { publicRequest } from "../../requestMethods";

function RecentProducts({ title, items, id }) {
  const [related, setRelated] = useState([]);
  const [product, setProduct] = useState("");
  // fetch Single product
  useEffect(() => {
    const fetchData = async () => {
      const fetched = await publicRequest.get(`/product/sell/details/${id}`);
      setProduct(fetched.data.details.category);
    };
    fetchData();
  }, []);

  // fetch Related products
  useEffect(() => {
    const fetchData = async () => {
      const fetched = await publicRequest.get(
        `/product/sell/relatedproducts?category=${product}`
      );
      setRelated(fetched.data);
    };
    fetchData();
  }, [product]);
  console.log(product, related);
  return (
    <div className="recent__products">
      <h1>{title}</h1>
      <div className="products__container">
        {related?.map((product) => (
          <RelatedProduct key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default RecentProducts;
