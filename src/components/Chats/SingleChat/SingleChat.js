import React from "react";
import "./SingleChat.css";
function SingleChat({ username, profileImg, lastMsg }) {
  return (
    <div className="single__chat">
      <img src={profileImg} />
      <div className="chat__info">
        <p>{username}</p>
        <span>
          {lastMsg.length > 35 ? lastMsg.slice(0, 35) + "..." : lastMsg}
        </span>
      </div>
    </div>
  );
}

export default SingleChat;
