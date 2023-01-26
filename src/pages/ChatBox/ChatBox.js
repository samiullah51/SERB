import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./ChatBox.css";
import SearchIcon from "@mui/icons-material/Search";
import Chats from "../../components/Chats/Chats";
function ChatBox() {
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
                This is message sfda f asf adfa dfasdf adfadf adfaf adfafdafdafd
                This is message sfda f asf adfa dfasdf adfadf adfaf adfafdafdafd
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
                This is message sfda f asf adfa dfasdf adfadf adfaf adfafdafdafd
                This is message sfda f asf adfa dfasdf adfadf adfaf adfafdafdafd
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
      </div>
    </>
  );
}

export default ChatBox;
