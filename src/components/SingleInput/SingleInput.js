import React from "react";
import "./SingleInput.css";
function SingleInput({ type, label }) {
  return (
    <div className="single__input">
      <p className="input__label">{label}</p>
      {type === "select" ? (
        <select>
          <option>Vehicles</option>
          <option>Mobile Phones</option>
          <option>birds</option>
        </select>
      ) : (
        <input type={type} />
      )}
    </div>
  );
}

export default SingleInput;
