import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import Rating from "../../components/Rating/Rating";
import Reviews from "../../components/Reviews/Reviews";
import SoldProducts from "../../components/SoldProducts/SoldProducts";
import "./Profile.css";
import Footer from "../../components/Footer/Footer";
import { userRequest } from "../../requestMethods";
import { useParams } from "react-router";
function Profile() {
  const { userId } = useParams();

  const [userDetails, setUserDetails] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const fetched = await userRequest.get(`/user/profile/${userId}`);
        setUserDetails(fetched.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchUser();
  }, [userId]);

  return (
    <>
      <Navbar />
      <div className="profile">
        <div className="profile__left">
          {/* Profile Header */}
          <ProfileHeader userDetails={userDetails} />
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
          <SoldProducts userDetails={userDetails} />
        </div>
        {/* Footer */}
      </div>
      <Footer />
    </>
  );
}

export default Profile;
