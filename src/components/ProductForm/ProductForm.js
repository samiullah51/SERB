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
      <div
        className="single__input"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <input type="text" style={{ flexBasis: "10%", marginRight: "25px" }} />
        <input type="text" style={{ flexBasis: "68%" }} />
      </div>

      {/* Condition */}
      <div className="single__input">
        <p className="label">Condition</p>
        <div className="input__conidtion">
          <label for="new">
            <input type="radio" id="new" name="conition" />
            <p>New</p>
          </label>
          <label for="used">
            <input type="radio" id="used" name="conition" />
            <p>Used</p>
          </label>
        </div>
      </div>
      {/* Price Section */}
      <div className="single__input price__input">
        <p className="label">Price</p>
        <input type="text" style={{ width: "125px" }} />
        <p className="pkr">PKR</p>
      </div>
    </div>
  );
}

export default ProductForm;
