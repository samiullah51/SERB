import React from "react";
import "./ProfileView.css";
function ProfileView() {
  return (
    <div className="sale__products">
      <div
        className="single__sale__product"
        style={{ backgroundColor: "#3A6562" }}
      >
        <p>Profile Views</p>
        <h1>200</h1>
      </div>
      <div
        className="single__sale__product"
        style={{ backgroundColor: "#20365A" }}
      >
        <p>Total Product Views</p>
        <h1>1,100</h1>
      </div>
    </div>
  );
}

export default ProfileView;
