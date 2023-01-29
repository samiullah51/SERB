import React, { useEffect, useState } from "react";
import { publicRequest } from "../../requestMethods";
import "./Gallary.css";
function Gallary({ id }) {
  const [images, setImages] = useState([]);
  const [active, setActive] = useState(images[0]);
  const [isActive, setIsActive] = useState(false);
  const [target, setTarget] = useState(images[0]);
  // Handle Images
  const handleImage = (image) => {
    setActive(image);
    setIsActive(true);
    setTarget(image);
  };

  // fetch Single product
  useEffect(() => {
    const fetchData = async () => {
      const fetched = await publicRequest.get(`/product/sell/details/` + id);
      setImages(fetched.data.details.photos);
      setTarget(fetched.data.details.photos[0]);
    };
    fetchData();
  }, [id]);

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
        <img src={target} />
      </div>
    </div>
  );
}

export default Gallary;
