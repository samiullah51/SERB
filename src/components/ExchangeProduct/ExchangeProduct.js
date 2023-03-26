import React, { useEffect, useState } from "react";
import "./ExchangeProduct.css";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { publicRequest } from "../../requestMethods";
import { useSelector } from "react-redux";
function ExchangeProduct({ product }) {
  const user = useSelector((state) => state.user);

  // // exchange product by ---- fetch user
  const [userDetails, setUserDetails] = useState("");
  useEffect(() => {
    const fetchUser = async () => {
      const fetched = await publicRequest.get(
        `user/details/singleuser/${[product.userId]}`
      );
      setUserDetails(fetched.data);
    };
    fetchUser();
  }, [product]);

  return (
    user._id !== product.userId && (
      <div className="exchange__product__page">
        <img src={product.photos[0]} />
        <p className="product__title">{product.title}</p>
        <p className="product__condition">• {product.condition}</p>
        {/* Product Footer */}
        <div className="product__footer">
          {/* Footer Left */}

          <div className="footer__left">
            <img src={userDetails.profileImage} />
            <p>{userDetails.fullName}</p>
          </div>
          {/* Footer Right */}
          <div className="footer__right">
            <ChatBubbleIcon />
          </div>
        </div>
      </div>
    )
  );
}
export default ExchangeProduct;
