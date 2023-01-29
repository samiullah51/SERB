import React, { useEffect, useState } from "react";
import "./RecentProducts.css";
// import { products } from "../../products";
import RecentProduct from "./RecentProduct/RecentProduct";
import { publicRequest } from "../../requestMethods";
function RecentProducts({ title, items }) {
  const [products, setProducts] = useState([]);

  // Fetch recent products
  useEffect(() => {
    const fetchProducts = async () => {
      const fetched = await publicRequest.get("/product/recentproducts");
      setProducts(fetched.data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="recent__products">
      <h1>{title}</h1>
      <div className="products__container">
        {products.map((product) => (
          <RecentProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default RecentProducts;
