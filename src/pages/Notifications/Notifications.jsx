import React, { useState } from "react";
import "./Notifications.css";
import Navbar from "../../components/Navbar/Navbar";
function Notifications() {
  const [selected, setSelected] = useState(null);
  const [current, setCurrent] = useState(false);
  let [all, setAll] = useState([
    {
      id: 1,
      text: "hello 1 from",
      status: "unread",
    },
    {
      id: 2,
      text: "hello 2 from",
      status: "read",
    },
    {
      id: 3,
      text: "hello 3 from",
      status: "unread",
    },
  ]);

  const handleClick = (index) => {
    setAll([...all], (all[index].status = "read"));
  };
  return (
    <>
      <Navbar />
      <div className="notifications">
        <div className="notifi__left">
          <div className="notifi__left__header">
            <h2>
              Notifications <span>6</span>
            </h2>
          </div>
          <div
            className="line"
            style={{ width: "100%", height: "1px", backgroundColor: "#fff" }}
          ></div>
          {/* notifications */}
          <div className="notifications__list">
            {all.map((single, index) => (
              <div
                className="single__notification"
                onClick={() => handleClick(index)}
              >
                <p
                  key={single.id}
                  style={{
                    fontWeight: single.status == "unread" ? "bold" : "normal",
                  }}
                >
                  {single.text}
                </p>
                {single.status === "unread" && (
                  <p className="notifi__status">New</p>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* right notification */}

        <div className="notifi__right">
          <div className="notifi__content">sdfsdfasfa</div>
        </div>
      </div>
    </>
  );
}

export default Notifications;
