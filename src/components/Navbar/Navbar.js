import React, { useState } from "react";
import "./Navbar.css";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import SearchIcon from "@mui/icons-material/Search";
import RightNavbar from "./RightNavbar/RightNavbar";
function Navbar() {
  const [searchByPlace, setSearchByPlace] = useState("");
  const [searchProduct, setSearchProduct] = useState("");
  let user = false;
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
          <div className="register__section">
            <p>Samiullah </p>
            <img src="https://m.media-amazon.com/images/M/MV5BMjMwNTIxODg0OF5BMl5BanBnXkFtZTgwODg2NzM0OTE@._V1_.jpg" />
          </div>
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
