import React from "react";
import "./Notifications.css";
import Navbar from "../../components/Navbar/Navbar";
function Notifications() {
  return (
    <>
      <Navbar />
      <div className="notifications">
        <div className="notifi__left">
          <div className="notifi__left__header">
            <h2>Notifications</h2>
          </div>
          <div
            className="line"
            style={{ width: "100%", height: "1px", backgroundColor: "#fff" }}
          ></div>
          {/* notifications */}
          <div className="notifications__list">
            <div className="single__notification">single notifications</div>
            <div className="single__notification">single notifications</div>
          </div>
        </div>
        <div className="notifi__right">
          <div className="notifi__right__header">
            <div className="notifi__info">
              <p>sdf</p>
            </div>
          </div>
          <div
            className="line"
            style={{ width: "100%", height: "1px", backgroundColor: "gray" }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default Notifications;
