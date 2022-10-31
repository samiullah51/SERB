import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import SuggestCategories from "../../components/SuggestCategories/SuggestCategories";
function Home() {
  return (
    <div>
      <Navbar />
      <SuggestCategories />
    </div>
  );
}

export default Home;
