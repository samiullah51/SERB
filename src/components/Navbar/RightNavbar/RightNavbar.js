import React from "react";
import { useState } from "react";
import "./RightNavbar.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import TurnSlightRightIcon from "@mui/icons-material/TurnSlightRight";
import TurnSlightLeftIcon from "@mui/icons-material/TurnSlightLeft";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { Link } from "react-router-dom";
function RightNavbar() {
  const [dropdown, setDropdown] = useState(false);
  const [mode, setMode] = useState("BUY");
  return (
    <div className="right__navbar">
      <Link to="/currentuserprofile">
        <TurnSlightRightIcon />
        <p>Sell</p>
      </Link>
      <Link to="/">
        <TurnSlightLeftIcon />
        <p>Buy</p>
      </Link>
      <Link to="/addexchangeproduct">
        <SwapHorizIcon />
        <p>Exchange</p>
      </Link>
      <Link>
        <EqualizerIcon />
        <p>Analytics</p>
      </Link>
      <Link>
        <NotificationsNoneIcon />
        <p>Notifications</p>
      </Link>

      <Link to="/chatbox">
        <ChatBubbleOutlineIcon />
        <p>Chats</p>
      </Link>

      <div className="label">
        <p>LogOut </p>
        <ExitToAppIcon />
      </div>
    </div>
  );
}

export default RightNavbar;
