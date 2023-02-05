import React, { useState } from "react";
import "./ProductForm.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AddIcon from "@mui/icons-material/Add";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
function ProductForm({ mode, behave, product }) {
  const [newProduct, setNewProduct] = useState({
    category: "",
    title: "",
    description: "",
    modal: "",
    location: "",
    condition: "",
    price: null,
  });
  const [photos, setPhotos] = useState({
    photo1: null,
    photo2: null,
    photo3: null,
    photo4: null,
    photo5: null,
  });
  // set image
  const [image, setImage] = useState({ image1: null, image2: null });
  const [showImg, setShowImg] = useState({ showImg1: null, showImg2: null });
  // handle image
  const handleChange = (image) => {
    if (image) {
      setImage(image);
      setShowImg({ ...showImg, showImg1: URL.createObjectURL(image) });
    }
  };
  // handle Click
  const handleClick = () => {
    if (mode === "sell") {
      console.log("sell functionality");
      console.log(URL.createObjectURL(photos.photo1));
    } else {
      console.log("Exchange functionality");
    }
  };
  return behave !== "edit" ? (
    <div className="form">
      <div className="single__input">
        <p className="label" style={{ marginBottom: "10px" }}>
          Category
        </p>
        <select
          onChange={(e) =>
            setNewProduct({ ...newProduct, category: e.target.value })
          }
        >
          <option hidden>Category</option>
          <option value="Vehicles">Vehicles</option>
          <option value="Birds">Birds</option>
          <option value="Furniture">Furniture</option>
          <option value="Motercycles">Motercycles</option>
        </select>
      </div>
      <div className="single__input">
        <p className="label">Title</p>
        <input
          type="text"
          value={newProduct.title}
          onChange={(e) =>
            setNewProduct({ ...newProduct, title: e.target.value })
          }
        />
      </div>
      <div className="single__input">
        <p className="label">Description</p>
        <textarea
          className="desc"
          value={newProduct.description}
          onChange={(e) =>
            setNewProduct({ ...newProduct, description: e.target.value })
          }
        ></textarea>
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
        <input
          type="text"
          value={newProduct.modal}
          onChange={(e) =>
            setNewProduct({ ...newProduct, modal: e.target.value })
          }
          style={{ flexBasis: "10%", marginRight: "25px" }}
        />
        <input
          type="text"
          value={newProduct.location}
          onChange={(e) =>
            setNewProduct({ ...newProduct, location: e.target.value })
          }
          style={{ flexBasis: "68%" }}
        />
      </div>

      {/* Condition */}
      <div className="single__input">
        <p className="label">Condition</p>
        <div className="input__conidtion">
          <label for="new">
            <input
              type="radio"
              id="new"
              name="conition"
              value="New"
              onChange={(e) =>
                setNewProduct({ ...newProduct, condition: e.target.value })
              }
            />
            <p>New</p>
          </label>
          <label for="used">
            <input
              type="radio"
              id="used"
              name="conition"
              value="Used"
              onChange={(e) =>
                setNewProduct({ ...newProduct, condition: e.target.value })
              }
            />
            <p>Used</p>
          </label>
        </div>
      </div>
      {/* Price Section */}
      <div className="single__input price__input">
        <p className="label">Price</p>
        <input
          type="number"
          value={newProduct.price}
          onChange={(e) =>
            setNewProduct({ ...newProduct, price: e.target.value })
          }
          style={{ width: "125px" }}
        />
        <p className="pkr">PKR</p>
      </div>
      {/* Images Section */}
      <div className="single__input">
        <p className="label">Upload up to 5 photos</p>
        <div className="input__photos">
          <label htmlFor="file1">
            <AddAPhotoIcon />
            <input
              type="file"
              id="file1"
              onChange={(e) => handleChange(e.target.files[0])}
            />
          </label>
          <label htmlFor="file2">
            <AddAPhotoIcon />
            <input
              type="file"
              id="file2"
              onChange={(e) => handleChange(e.target.files[0])}
            />
          </label>
          <label htmlFor="file3">
            <AddAPhotoIcon />
            <input type="file" id="file3" onChange={handleChange} />
          </label>
          <label htmlFor="file4">
            <AddAPhotoIcon />
            <input type="file" id="file4" onChange={handleChange} />
          </label>
          <label htmlFor="file5">
            <AddAPhotoIcon />
            <input type="file" id="file5" onChange={handleChange} />
          </label>
          <img src={showImg.showImg1} />
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
  ) : (
    <div className="form">
      <div className="single__input">
        <p className="label" style={{ marginBottom: "10px" }}>
          Categorys
        </p>
        <select>
          <option selected>{product?.details?.category}</option>
          <option>Vehicles</option>
          <option>Birds</option>
          <option>Furniture</option>
          <option>Motercycles</option>
        </select>
      </div>
      <div className="single__input">
        <p className="label">Title</p>
        <input type="text" value={product?.details?.title} />
      </div>
      <div className="single__input">
        <p className="label">Description</p>
        <textarea
          className="desc"
          value={product?.details?.description}
        ></textarea>
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
        <input
          type="text"
          value={product?.details?.modal}
          style={{ flexBasis: "10%", marginRight: "25px" }}
        />
        <input
          type="text"
          value={product?.details?.location}
          style={{ flexBasis: "68%" }}
        />
      </div>

      {/* Condition */}
      <div className="single__input">
        <p className="label">Condition</p>
        <div className="input__conidtion">
          <label for="new">
            <input
              type="radio"
              id="new"
              name="conition"
              checked={product?.details?.condition === "New" ? true : false}
            />
            <p>New</p>
          </label>
          <label for="used">
            <input
              type="radio"
              id="used"
              name="conition"
              checked={product?.details?.condition === "Used" ? true : false}
            />
            <p>Used</p>
          </label>
        </div>
      </div>
      {/* Price Section */}
      <div className="single__input price__input">
        <p className="label">Price</p>
        <input
          type="text"
          value={product?.details?.price}
          style={{ width: "125px" }}
        />
        <p className="pkr">PKR</p>
      </div>
      {/* Images Section */}
      <div className="single__input">
        <p className="label">Update photos</p>
        <div className="input__photos">
          <img src={product?.details?.photos[0]} />
          <img src={product?.details?.photos[1]} />
          <img src={product?.details?.photos[2]} />
          <img src={product?.details?.photos[3]} />
          <img src={product?.details?.photos[4]} />
        </div>
      </div>

      {/* Submit Section */}
      <div className="submit__section">
        <button className="cancel__button">Cancel</button>
        <button className="post__button" onClick={handleClick}>
          Update
        </button>
      </div>
    </div>
  );
}

export default ProductForm;
