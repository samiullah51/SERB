import React, { useRef, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./ChatBox.css";
import SearchIcon from "@mui/icons-material/Search";
import Chats from "../../components/Chats/Chats";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { userRequest } from "../../requestMethods";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SendIcon from "@mui/icons-material/Send";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import { loader } from "../../loader";

import * as timeago from "timeago.js";

function ChatBox() {
  const selected = useSelector((state) => state.selected);
  const currentChat = useSelector((state) => state.currentChat);
  const user = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  //
  const [messages, setMessages] = useState([]);

  //   scroll
  const scrollRef = useRef(null);
  // Get messages

  useEffect(() => {
    const msgs = async () => {
      const getMsgs = await userRequest.get(`/message/${currentChat}`);
      setMessages(getMsgs.data);
    };
    msgs();
  }, [messages.length, currentChat]);

  //   scrolling
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages.length, currentChat]);
  //
  const [msg, setMsg] = useState("");
  // send message
  const handleClick = async () => {
    setLoading(true);
    try {
      const send = await userRequest.post(`/message`, {
        conversationId: currentChat,
        sender: user._id,
        text: msg,
      });
      send && setMessages([...messages, send.data]);
      setMsg("");
      setLoading(false);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
      <Navbar />
      <div className="chatbox">
        {/* Left Chatbox */}
        <div className="chatbox__left">
          <div className="left__header">
            <h3>Inbox</h3>
          </div>
          {/* Searchbox */}
          <div className="search__chat">
            <input type="text" placeholder="Search here..." />
            <SearchIcon />
          </div>

          {/* Chats*/}

          <Chats />
        </div>

        {/* Right Chatbox */}
        {!selected ? (
          <div
            className="chatbox__right"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#fff",
              borderLeft: "1px solid #ccc",
            }}
          >
            <img
              src="https://www.heartlandintergroup.org/wp-content/uploads/chat-bubble-bouncing_clear-background.gif"
              width={200}
              height={200}
            />
            <h1 style={{ fontWeight: "500" }}>{user.fullName}</h1>
            <h2 style={{ fontWeight: "450" }}>Welcome to Chats</h2>
            <p>Click on a Conversation to Chat with.</p>
          </div>
        ) : (
          <div className="chatbox__right">
            <div className="right__header">
              {/* Right header profile Side */}
              <div className="header__profile">
                <img src={selected.profileImage} />
                <div className="profile__info">
                  <p>{selected.fullName}</p>
                  <span>Last seen 2 hrs ago</span>
                </div>
              </div>
              {/* Right header contact info */}
              <div className="header__contact">
                <MoreVertIcon />
              </div>
            </div>

            {/* Chat Messages */}
            {/* <Messages /> */}
            <div className="chat__messages">
              {messages.length === 0 ? (
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
                      <span>{timeago.format(msg.createdAt)}</span>
                    </div>
                  ) : (
                    <div className="message__reciever" ref={scrollRef}>
                      <p>{msg.text}</p>
                      <span>{timeago.format(msg.createdAt)}</span>
                    </div>
                  )
                )
              )}
            </div>

            {/* Write New Message */}
            <div className="new__message">
              <SentimentSatisfiedAltIcon />
              <input
                type="text"
                placeholder="Write here..."
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                autoFocus
              />
              {!loading ? (
                <SendIcon onClick={handleClick} />
              ) : (
                <img src={loader} width={20} />
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ChatBox;
