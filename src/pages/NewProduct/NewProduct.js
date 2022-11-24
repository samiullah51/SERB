import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import ProductForm from "../../components/ProductForm/ProductForm";
import "./NewProduct.css";
function NewProduct() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* New Product */}
      <h1>Add New Product</h1>
      <div className="new__product">
        {/* form */}
        <div className="product__form">
          <ProductForm />
        </div>
      </div>
    </>
  );
}

export default NewProduct;
