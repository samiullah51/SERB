import React from "react";
import { useState } from "react";
import "./RightNavbar.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
function RightNavbar() {
  const [dropdown, setDropdown] = useState(false);
  const [mode, setMode] = useState("SELLER");
  return (
    <div className="right__navbar">
      <p className="label">Switch to</p>
      <div className="switcher" onClick={() => setDropdown(!dropdown)}>
        <div className="mode">
          <p>{mode}</p>
          <KeyboardArrowDownIcon />
        </div>
        {dropdown && (
          <div className="show">
            {mode === "SELLER" && (
              <>
                <p onClick={() => setMode("BUYER")}>BUYER</p>
                <p onClick={() => setMode("EXCHANGER")}>EXCHANGER</p>
              </>
            )}
            {mode === "BUYER" && (
              <>
                <p onClick={() => setMode("SELLER")}>SELLER</p>
                <p onClick={() => setMode("EXCHANGER")}>EXCHANGER</p>
              </>
            )}
            {mode === "EXCHANGER" && (
              <>
                <p onClick={() => setMode("BUYER")}>BUYER</p>
                <p onClick={() => setMode("SELLER")}>SELLER</p>
              </>
            )}
          </div>
        )}
      </div>
      <p className="label">Mode</p>
    </div>
  );
}

export default RightNavbar;
