import React, { useEffect, useMemo, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { userRequest } from "../../requestMethods";

function Messages() {
  const [messages, setMessages] = useState([]);

  const currentChat = useSelector((state) => state.currentChat);
  const selected = useSelector((state) => state.selected);

  const user = useSelector((state) => state.user);
  //   scroll
  const scrollRef = useRef(null);
  // Get messages

  useEffect(() => {
    const msgs = async () => {
      const getMsgs = await userRequest.get(`/message/${currentChat}`);
      setMessages(getMsgs.data);
    };
    console.log("chainging..ffddf", messages.length);
    msgs();
  }, [messages.length, currentChat]);

  //   scrolling
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    console.log("chainging..");
  }, [currentChat]);
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
            <div className="message__sender" ref={scrollRef}>
              <p>{msg.text}</p>
              <span>4:34 am</span>
            </div>
          ) : (
            <div className="message__reciever" ref={scrollRef}>
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
