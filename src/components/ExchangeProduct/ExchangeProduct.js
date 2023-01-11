import React from "react";
import "./ExchangeProduct.css";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
function ExchangeProduct({ product }) {
  return (
    <div className="exchange__product">
      <img src={product.image} />
      <p className="product__title">{product.title}</p>
      <p className="product__condition">• {product.condition}</p>
      {/* Product Footer */}
      <div className="product__footer">
        {/* Footer Left */}
        <div className="footer__left">
          <img src="./images/sami.jpg" />
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
