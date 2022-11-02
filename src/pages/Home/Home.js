import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import SuggestCategories from "../../components/SuggestCategories/SuggestCategories";
import RecentProducts from "../../components/RecentProducts/RecentProducts";
import Footer from "../../components/Footer/Footer";
function Home() {
  return (
    <>
      <Navbar />
      <SuggestCategories />
      <RecentProducts title="Recent Products" items={10} />
      <Footer />
    </>
  );
}

export default Home;
