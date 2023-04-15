import React from "react";
import "./../Views.css";
import Navbar from "../../../components/Navbar/Navbar";
import Sidebar from "../../../components/Sidebar/Sidebar";
import ProfileStats from "./ProfileStats";
import ProfileViews from "../../../components/Views/ProfileViews";
function ProfileView() {
  return (
    <>
      <Navbar />
      <div className="views">
        {/* Sidebar */}
        <Sidebar />
        <ProfileView />
        <ProfileStats />
      </div>
    </>
  );
}

export default ProfileView;
