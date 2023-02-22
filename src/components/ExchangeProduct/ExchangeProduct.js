import React, { useEffect } from "react";
import "./ExchangeProduct.css";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
function ExchangeProduct({ product }) {
  // // exchange product by ---- fetch user
  // useEffect(()=>{

  // })

  return (
    <div className="exchange__product__page">
      <img src={product.photos[0]} />
      <p className="product__title">{product.title}</p>
      <p className="product__condition">• {product.condition}</p>
      {/* Product Footer */}
      <div className="product__footer">
        {/* Footer Left */}
        <div className="footer__left">
          <img src={product.photos[0]} />
          <p>Sami Samiullah</p>
        </div>
        {/* Footer Right */}
        <div className="footer__right">
          <ChatBubbleIcon />
        </div>
      </div>
    </div>
  );
}

export default ExchangeProduct;
