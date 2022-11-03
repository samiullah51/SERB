import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import Rating from "../../components/Rating/Rating";
import Reviews from "../../components/Reviews/Reviews";
import "./Profile.css";
function Profile() {
  return (
    <>
      <Navbar />
      <div className="profile">
        <div className="profile__left">
          {/* Profile Header */}
          <ProfileHeader />
          {/* Description About Profile */}
          <div className="left__about">
            <p className="about__about">About</p>
            <p className="about__desc">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type
            </p>
          </div>
          {/* Rating */}
          <p className="rating__title">Rating and reviews</p>
          <Rating />
          {/* Reviews */}
          <Reviews />
        </div>
        <div className="profile__right">right</div>
      </div>
    </>
  );
}

export default Profile;
