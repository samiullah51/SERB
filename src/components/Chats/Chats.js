import React from "react";
import "./Chats.css";
import { dummyChat } from "../../components/Chats/dummyChat";
import SingleChat from "./SingleChat/SingleChat";
import { useEffect } from "react";
import { useState } from "react";
import { userRequest } from "../../requestMethods";

function Chats() {
  const chats = useState([]);
  useEffect(() => {
    const getChats = async () => {
      const gotChats = await userRequest.post("/conversation");
      console.log(gotChats);
    };
    getChats();
  }, [chats]);
  return (
    <>
      {dummyChat.map((chat) => (
        <SingleChat key={chat.id} {...chat} />
      ))}
    </>
  );
}

export default Chats;
