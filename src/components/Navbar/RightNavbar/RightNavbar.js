import React from "react";
import { useState } from "react";
import "./RightNavbar.css";
function RightNavbar() {
  const [dropdown, setDropdown] = useState(false);
  const [mode, setMode] = useState("SELLER");
  return (
    <div className="right__navbar">
      <p className="label">Switch to</p>
      <div className="switcher" onClick={() => setDropdown(!dropdown)}>
        <p className="mode">{mode}</p>
        {dropdown && (
          <div className="show">
            <p onClick={() => setMode("SELLER")}>
              {mode === "SELLER" ? "ACTIVE" : "SELLER"}
            </p>
            <p onClick={() => setMode("BUYER")}>
              {mode === "BUYER" ? "ACTIVE" : "BUYER"}
            </p>
            <p onClick={() => setMode("EXCHANGER")}>
              {mode === "EXCHANGER" ? "ACTIVE" : "EXCHANGER"}
            </p>
          </div>
        )}
      </div>
      <p className="label">Mode</p>
    </div>
  );
}

export default RightNavbar;
