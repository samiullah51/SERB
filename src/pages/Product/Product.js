import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Product.css";
function Product() {
  const images = [
    "./images/p1.png",
    "./images/p2.jpg",
    "./images/p3.jpg",
    "./images/p4.jpg",
    "./images/p5.jpg",
  ];
  const [active, setActive] = useState(images[0]);
  const [isActive, setIsActive] = useState(false);
  const [target, setTarget] = useState(images[0]);
  // Handle Images
  const handleImage = (image) => {
    setActive(image);
    setIsActive(true);
    setTarget(image);
  };

  return (
    <div className="product">
      <Navbar />
      <div className="product__container">
        <div className="container__left">
          <div className="left__galary">
            <div className="galary__all">
              {images.map((image) =>
                image === target ? (
                  <img src={image} className="active" />
                ) : (
                  <img src={image} onClick={() => handleImage(image)} />
                )
              )}
            </div>
            <div className="galary__main">
              <img src={active} />
            </div>
          </div>
        </div>
        <div className="container__right">right</div>
      </div>
    </div>
  );
}

export default Product;
