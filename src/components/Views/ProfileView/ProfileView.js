import React from "react";
import "./ProfileView.css";
import { Link } from "react-router-dom";
function ProfileView() {
  return (
    <div className="sale__products">
      <Link
        className="single__sale__product"
        style={{ backgroundColor: "#3A6562" }}
        to="/views/profileviews"
      >
        <p>Profile Views</p>
        <h1>200</h1>
      </Link>
      <Link
        className="single__sale__product"
        style={{ backgroundColor: "#20365A" }}
        to="/views/totalproductviews"
      >
        <p>Total Product Views</p>
        <h1>1,100</h1>
      </Link>
    </div>
  );
}

export default ProfileView;
