import React, { useState } from "react";
import { useEffect } from "react";
import { userRequest } from "../../../requestMethods";
import "./SingleChat.css";
function SingleChat({ chat }) {
  const memberId = chat.members[1];
  const [member, setMember] = useState("");
  // fetch the details chat member
  useEffect(() => {
    const getMember = async () => {
      const gotMember = await userRequest.get(
        `/user/details/singleuser/${memberId}`
      );

      setMember(gotMember.data);
    };
    getMember();
  }, []);

  return (
    <div className="single__chat">
      <img src={member.profileImage} />
      <div className="chat__info">
        <p>{member.fullName}</p>
        <span>
          {/* {lastMsg.length > 35 ? lastMsg.slice(0, 35) + "..." : lastMsg} */}
          last message...
        </span>
      </div>
    </div>
  );
}

export default SingleChat;
