import React from "react";
import "./Awards.css";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Sales from "../../components/Sales/Sales";
function Views() {
  return (
    <>
      <Navbar />
      <div className="views">
        {/* Sidebar */}
        <Sidebar />
        {/* Sales */}
        <Sales />
      </div>
    </>
  );
}

export default Views;
