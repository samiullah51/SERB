import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import SingleInput from "../../components/SingleInput/SingleInput";
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
          {/* Single Input */}
          <SingleInput type="select" label="Category" />
          <SingleInput type="text" label="Title" />
          <SingleInput type="text" label="Title" />
        </div>
      </div>
    </>
  );
}

export default NewProduct;
