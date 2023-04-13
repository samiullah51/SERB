import React from "react";
import "./Item.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
function Item() {
  return (
    <div className="items">
      <Link className="single__item active">
        <ShoppingCartOutlinedIcon />
        <p>Sales</p>
      </Link>
      <Link className="single__item">
        <EmojiEventsOutlinedIcon />
        <p>Awards</p>
      </Link>
      <Link className="single__item">
        <VisibilityOutlinedIcon />
        <p>Views</p>
      </Link>
      <Link className="single__item">
        <AttachMoneyOutlinedIcon />
        <p>Revenue</p>
      </Link>
    </div>
  );
}

export default Item;
