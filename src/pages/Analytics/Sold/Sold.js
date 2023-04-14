import React from "react";
import "./Total.css";
import Navbar from "../../../components/Navbar/Navbar";
import Sidebar from "../../../components/Sidebar/Sidebar";
import SalesItems from "../../../components/SalesItems/SalesItems";
function Sold() {
  return (
    <>
      <Navbar />
      <div className="total">
        <Sidebar />
        <SalesItems title="Sold Products" />
      </div>
    </>
  );
}

export default Sold;
