import React from "react";
import "./ProfileHeader.css";
function ProfileHeader() {
  return (
    <div className="profile__header">
      <img
        className="profile__img"
        src="https://m.media-amazon.com/images/M/MV5BMjMwNTIxODg0OF5BMl5BanBnXkFtZTgwODg2NzM0OTE@._V1_.jpg"
      />
      <div className="profile__info">
        <p className="info__name">Sami Samiullah</p>
        <p className="info__from">since 01-Jan-2022</p>
      </div>
      <img
        className="level__img"
        src="https://static.vecteezy.com/system/resources/previews/004/946/876/non_2x/winner-badge-concepts-vector.jpg"
      />
    </div>
  );
}

export default ProfileHeader;
