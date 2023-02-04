import React from "react";
import { useSelector } from "react-redux";
import AllCurrentUserProducts from "../../components/AllCurrentUserProducts/AllCurrentUserProducts";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import Rating from "../../components/Rating/Rating";
import Reviews from "../../components/Reviews/Reviews";
import SoldProducts from "../../components/SoldProducts/SoldProducts";
import "./CurrentUserProfile.css";
function CurrentUserProfile() {
  const user = useSelector((state) => state.user);
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
        <div className="profile__right">
          <div className="right__header">
            <div className="header__left">
              <p className="all">All</p>
              <p>Favorite</p>
            </div>
            <div className="header__right">
              <button>Add New</button>
            </div>
          </div>
          {/* All Products of Current User */}
          <AllCurrentUserProducts mode="sell" />
        </div>
        {/* Footer */}
      </div>
      <Footer />
    </>
  );
}

export default CurrentUserProfile;
