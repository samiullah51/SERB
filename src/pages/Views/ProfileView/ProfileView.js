import React from "react";
import "./../Views.css";
import Navbar from "../../../components/Navbar/Navbar";
import Sidebar from "../../../components/Sidebar/Sidebar";
import ProfileStats from "./ProfileStats";
import ProfileViews from "../../../components/Views/ProfileViews";
import ProfileVieww from "../../../components/Views/ProfileView/ProfileView";
function ProfileView() {
  return (
    <>
      <Navbar />
      <div className="views">
        {/* Sidebar */}
        <Sidebar />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            flexBasis: "80%",
            padding: "20px",
          }}
        >
          <ProfileVieww /> 
          <ProfileStats />
        </div>
      </div>
    </>
  );
}

export default ProfileView;
