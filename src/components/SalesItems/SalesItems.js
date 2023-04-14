import React from "react";
import "./SalesItems.css";
import SingleItem from "./SingleItem";
function SalesItems({ title }) {
  return (
    <div className="sales__items">
      <h1>{title}</h1>
      {/* single item */}
      <div className="items">
        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />
      </div>
    </div>
  );
}

export default SalesItems;
