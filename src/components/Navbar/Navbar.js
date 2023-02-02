import React, { useState } from "react";
import "./Navbar.css";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import SearchIcon from "@mui/icons-material/Search";
import RightNavbar from "./RightNavbar/RightNavbar";
import { Link } from "react-router-dom";
function Navbar() {
  const [searchByPlace, setSearchByPlace] = useState("");
  const [searchProduct, setSearchProduct] = useState("");
  let user = true;
  return (
    <div className="navbar">
      {/* Navbar Left */}

      <div className="navbar__left">
        <h2>SERB</h2>

        {/*  Search for porduct */}

        <div className="main__searchbox">
          {/* Place for search */}

          <div className="searchbox">
            <PlaceOutlinedIcon />
            <input
              type="text"
              value={searchByPlace}
              onChange={(e) => setSearchByPlace(e.target.value)}
              placeholder="Location"
            />
          </div>
          <div className="searchbox">
            <input
              type="text"
              value={searchProduct}
              onChange={(e) => setSearchProduct(e.target.value)}
              placeholder="Search here..."
            />
            <SearchIcon />
          </div>
        </div>

        {/* Register Section */}

        {!user ? (
          <div className="register__section">
            <p>Sign In</p>
            <p>/</p>
            <p>Sign Up</p>
          </div>
        ) : (
          <Link to="/profile" className="register__section">
            <p style={{ color: "#fff" }}>Samiullah </p>
            <img src="https://th.bing.com/th/id/R.f7d2014756bb5303a0df53c508b98ce7?rik=lziNgiLZKtAZGQ&pid=ImgRaw&r=0&sres=1&sresct=1" />
          </Link>
        )}
      </div>

      {/* Navbar Right */}

      <div className="navbar__right">
        <RightNavbar />
      </div>
    </div>
  );
}

export default Navbar;
