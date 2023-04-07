import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userRequest } from "../../requestMethods";

function Messages() {
  const [messages, setMessages] = useState([]);
  const [conversations, setConversations] = useState([]);
  const currentChat = useSelector((state) => state.currentChat);
  const selected = useSelector((state) => state.selected);

  const user = useSelector((state) => state.user);
  // Get messages
  useEffect(() => {
    const msgs = async () => {
      const getMsgs = await userRequest.get(`/message/${currentChat}`);
      setMessages(getMsgs.data);
    };
    msgs();
  }, [currentChat]);
  console.log(messages);
  return (
    <div className="chat__messages">
      <div className="message__sender">
        <p>This is message</p>
        <span>4:34 am</span>
      </div>
      <div className="message__reciever">
        <p>This is message</p>
        <span>4:34 am</span>
      </div>
      {messages.map((msg) =>
        user._id === msg.sender ? (
          <div className="message__sender">
            <p>{msg.text}</p>
            <span>4:34 am</span>
          </div>
        ) : (
          <div className="message__reciever">
            <p>{msg.text}</p>
            <span>4:34 am</span>
          </div>
        )
      )}
    </div>
  );
}

export default Messages;
