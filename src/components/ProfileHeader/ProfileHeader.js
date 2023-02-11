import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./ProfileHeader.css";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import { loader } from "../../loader";
import EditContainer from "./EditContainer";
function ProfileHeader({ userDetails }) {
  const user = useSelector((state) => state.user);
  let sinceJoin = new Date(userDetails?.createdAt).toLocaleString("en-US", {
    day: "numeric",
    year: "numeric",
    month: "long",
  });

  // user data
  const [fullName, setFullName] = useState(user.fullName);
  const [password, setPassword] = useState(user.password);

  // show edit container
  const [show, setShow] = useState(false);

  // error
  const [error, setError] = useState("");
  // loading
  const [loading, setLoading] = useState(false);

  return (
    <div className="profile__header">
      {/* Edit button */}
      <div className="edit__profile" onClick={() => setShow(true)}>
        <EditIcon />
      </div>
      {/* Edit Container */}
      {show && <EditContainer setShow={setShow} />}

      <img className="profile__img" src={userDetails.profileImage} />
      <div className="profile__info">
        <p className="info__name">{userDetails.fullName}</p>
        <p className="info__from">{sinceJoin}</p>
      </div>
      <img
        className="level__img"
        src="https://static.vecteezy.com/system/resources/previews/004/946/876/non_2x/winner-badge-concepts-vector.jpg"
      />
    </div>
  );
}

export default ProfileHeader;
