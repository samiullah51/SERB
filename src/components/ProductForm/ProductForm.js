import React from "react";
import "./ProductForm.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AddIcon from "@mui/icons-material/Add";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
function ProductForm({ mode }) {
  // handle Click
  const handleClick = () => {
    if (mode === "sell") {
      console.log("sell functionality");
    } else {
      console.log("Exchange functionality");
    }
  };

  return (
    <div className="form">
      <div className="single__input">
        <p className="label" style={{ marginBottom: "10px" }}>
          Category
        </p>
        <select>
          <option hidden>Category</option>
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
      {/* Images Section */}
      <div className="single__input">
        <p className="label">Upload up to 5 photos</p>
        <div className="input__photos">
          <AddAPhotoIcon />
          <AddAPhotoIcon />
          <AddAPhotoIcon />
          <AddAPhotoIcon />
          <AddAPhotoIcon />
        </div>
      </div>

      {/* Submit Section */}
      <div className="submit__section">
        <button className="cancel__button">Cancel</button>
        <button className="post__button" onClick={handleClick}>
          Post
        </button>
      </div>
    </div>
  );
}

export default ProductForm;
