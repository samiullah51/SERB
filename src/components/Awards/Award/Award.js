import React from "react";
import "./Award.css";
function Award() {
  return (
    <div className="sale__products">
      <div
        className="single__sale__product"
        style={{ backgroundColor: "#3A6562" }}
      >
        <p>Level </p>
        <h1>01</h1>
        <div className="award__progress">
          <div className="progressbar"></div>
        </div>
      </div>
    </div>
  );
}

export default Award;
