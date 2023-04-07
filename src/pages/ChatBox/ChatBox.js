import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./ChatBox.css";
import SearchIcon from "@mui/icons-material/Search";
import Chats from "../../components/Chats/Chats";
import { useSelector } from "react-redux";
function ChatBox() {
  const selected = useSelector((state) => state.selected);
  const user = useSelector((state) => state.user);

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
                <img src="./images/sami.jpg" />
                <div className="profile__info">
                  <p>Sami Samiullah</p>
                  <span>Last seen 2 hrs ago</span>
                </div>
              </div>
              {/* Right header contact info */}
              <div className="header__contact">
                <SearchIcon />
              </div>
            </div>

            {/* Chat Messages */}
            <div className="chat__messages">
              <div className="message__sender">
                <p>This is message</p>
                <span>4:34 am</span>
              </div>
              <div className="message__reciever">
                <p>This is message</p>
                <span>4:34 am</span>
              </div>
              <div className="message__sender">
                <p>
                  This is message sfda f asf adfa dfasdf adfadf adfaf
                  adfafdafdafd This is message sfda f asf adfa dfasdf adfadf
                  adfaf adfafdafdafd
                </p>
                <span>4:34 am</span>
              </div>{" "}
              <div className="message__sender">
                <p>This is message</p>
                <span>4:34 am</span>
              </div>{" "}
              <div className="message__reciever">
                <p>This is message</p>
                <span>4:34 am</span>
              </div>{" "}
              <div className="message__sender">
                <p>This is message</p>
                <span>4:34 am</span>
              </div>{" "}
              <div className="message__reciever">
                <p>
                  This is message sfda f asf adfa dfasdf adfadf adfaf
                  adfafdafdafd This is message sfda f asf adfa dfasdf adfadf
                  adfaf adfafdafdafd
                </p>
                <span>4:34 am</span>
              </div>{" "}
              <div className="message__sender">
                <p>This is message</p>
                <span>4:34 am</span>
              </div>{" "}
              <div className="message__sender">
                <p>This is message</p>
                <span>4:34 am</span>
              </div>{" "}
              <div className="message__sender">
                <p>This is message</p>
                <span>4:34 am</span>
              </div>{" "}
              <div className="message__sender">
                <p>This is message</p>
                <span>4:34 am</span>
              </div>{" "}
              <div className="message__sender">
                <p>This is message</p>
                <span>4:34 am</span>
              </div>{" "}
              <div className="message__sender">
                <p>This is message</p>
                <span>4:34 am</span>
              </div>{" "}
              <div className="message__sender">
                <p>This is message</p>
                <span>4:34 am</span>
              </div>{" "}
              <div className="message__sender">
                <p>This is message</p>
                <span>4:34 am</span>
              </div>{" "}
              <div className="message__sender">
                <p>This is message</p>
                <span>4:34 am</span>
              </div>{" "}
              <div className="message__sender">
                <p>This is message</p>
                <span>4:34 am</span>
              </div>
            </div>

            {/* Write New Message */}
            <div className="new__message">
              <SearchIcon />
              <input type="text" placeholder="Write here..." />
              <SearchIcon />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ChatBox;
