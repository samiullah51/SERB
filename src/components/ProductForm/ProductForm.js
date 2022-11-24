import React from "react";
import "./ProductForm.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AddIcon from "@mui/icons-material/Add";
function ProductForm() {
  return (
    <div className="form">
      <div className="single__input">
        <p className="label">Category</p>
        <select>
          <option disabled>--Select--</option>
          <option>Vehicles</option>
          <option>Birds</option>
          <option>Furniture</option>
          <option>Motercycles</option>
        </select>
      </div>
      <div className="single__input">
        <p className="label">Title</p>
        <input type="text" />
      </div>
      <div className="single__input">
        <p className="label">Description</p>
        <textarea className="desc"></textarea>
      </div>
      {/* <Modal and Location */}
      <div className="modal__location">
        <div className="modal__location__box">
          <AddIcon />
          <p>Modal</p>
        </div>
        <div className="modal__location__box">
          <LocationOnIcon />
          <p>Location</p>
        </div>
      </div>
    </div>
  );
}

export default ProductForm;
