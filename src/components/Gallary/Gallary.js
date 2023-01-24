import React, { useState } from "react";
import "./Gallary.css";
function Gallary() {
  const images = [
    "./images/p4.jpg",
    "./images/c1.jpg",
    "./images/c2.jfif",
    "./images/c3.jfif",
    "./images/c4.jfif",
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
  );
}

export default Gallary;
