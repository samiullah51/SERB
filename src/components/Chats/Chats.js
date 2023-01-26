import React from "react";
import "./Chats.css";
import { dummyChat } from "../../components/Chats/dummyChat";
import SingleChat from "./SingleChat/SingleChat";

function Chats() {
  return (
    <>
      {dummyChat.map((chat) => (
        <SingleChat key={chat.id} {...chat} />
      ))}
    </>
  );
}

export default Chats;
