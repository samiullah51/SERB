import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import ProductForm from "../../components/ProductForm/ProductForm";
import "./NewProduct.css";
function NewProduct({ mode }) {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* New Product */}
      {mode === "sell" ? (
        <h1>Add New Product</h1>
      ) : (
        <h1>Add Product To Exchange</h1>
      )}
      <div className="new__product">
        {/* form */}
        <div className="product__form">
          <ProductForm mode={mode} />
        </div>
      </div>
    </>
  );
}

export default NewProduct;
