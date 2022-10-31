import React, { useState } from "react";
import "./Navbar.css";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import SearchIcon from "@mui/icons-material/Search";
import RightNavbar from "./RightNavbar/RightNavbar";
function Navbar() {
  const [searchByPlace, setSearchByPlace] = useState("");
  const [searchProduct, setSearchProduct] = useState("");
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

        <div className="register__section">
          <p>Sign In</p>
          <p>/</p>
          <p>Sign Up</p>
        </div>
      </div>

      {/* Navbar Right */}

      <div className="navbar__right">
        <RightNavbar />
      </div>
    </div>
  );
}

export default Navbar;
