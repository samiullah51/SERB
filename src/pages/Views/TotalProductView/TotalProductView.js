import React from "react";
import "./../Views.css";
import Navbar from "../../../components/Navbar/Navbar";
import Sidebar from "../../../components/Sidebar/Sidebar";
import ProfileStats from "./ProfileStats";
function TotalProductView() {
  return (
    <>
      <Navbar />
      <div className="views">
        {/* Sidebar */}
        <Sidebar />
        <ProfileStats />
      </div>
    </>
  );
}

export default TotalProductView;
