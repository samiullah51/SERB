import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import SuggestCategories from "../../components/SuggestCategories/SuggestCategories";
import RecentProducts from "../../components/RecentProducts/RecentProducts";
function Home() {
  return (
    <>
      <Navbar />
      <SuggestCategories />
      <RecentProducts />
    </>
  );
}

export default Home;
