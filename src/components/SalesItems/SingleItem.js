import React from "react";
import "./SalesItems.css";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
function SingleItem() {
  return (
    <div className="single__item">
      <img src="https://th.bing.com/th/id/OIP.8wc5wALWBwLSvLkUos-hAQHaJ4?pid=ImgDet&rs=1" />
      <p className="title">Best Glass</p>
      <div className="seen">
        <RemoveRedEyeOutlinedIcon />
        <p>120</p>
      </div>
      <p className="price">12000</p>
      <p className="condition">Used</p>
      <p className="status">Available</p>
      <p className="createdAt">09-Oct-2022</p>
      <div className="actions">
        <DeleteOutlineIcon />
        <EditIcon />
      </div>
    </div>
  );
}

export default SingleItem;
