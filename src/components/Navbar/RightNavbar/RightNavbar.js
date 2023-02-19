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
import { Link, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LOG_OUT } from "../../../redux/User/userTypes";
function RightNavbar() {
  const dispatch = useDispatch();
  // handle logout
  const handleLogout = () => {
    localStorage.clear();
    dispatch({ type: LOG_OUT });
  };
  return (
    <div className="right__navbar">
      <NavLink to="/">
        <TurnSlightLeftIcon />
        <p>Buy</p>
      </NavLink>
      <NavLink to="/currentuserprofile">
        <TurnSlightRightIcon />
        <p>Sell</p>
      </NavLink>
      <NavLink to="/addexchangeproduct">
        <SwapHorizIcon />
        <p>Exchange</p>
      </NavLink>
      <NavLink to="/exchangeproducts">
        <EqualizerIcon />
        <p>Analytics</p>
      </NavLink>
      <NavLink to="/exchangewith">
        <NotificationsNoneIcon />
        <p>Notifications</p>
      </NavLink>

      <NavLink to="/chatbox">
        <ChatBubbleOutlineIcon />
        <p>Chats</p>
      </NavLink>

      <div className="label" onClick={handleLogout}>
        <p>LogOut </p>
        <ExitToAppIcon />
      </div>
    </div>
  );
}

export default RightNavbar;
