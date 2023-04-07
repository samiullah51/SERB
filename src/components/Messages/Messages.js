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
      {messages.length == 0 ? (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2
            style={{
              fontWeight: "300",
              color: "#fff",
            }}
          >
            Leave a Message to Start Chating
          </h2>
          <h2
            style={{
              fontWeight: "300",
              color: "#fff",
            }}
          >
            with
          </h2>
          <h1
            style={{
              fontWeight: "300",
              color: "#fff",
            }}
          >
            {selected.fullName}
          </h1>
        </div>
      ) : (
        messages.map((msg) =>
          user._id !== msg.sender ? (
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
        )
      )}
    </div>
  );
}

export default Messages;
