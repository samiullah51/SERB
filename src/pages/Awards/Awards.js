import React from "react";
import "./Awards.css";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Sales from "../../components/Sales/Sales";
function Awards() {
  return (
    <>
      <Navbar />
      <div className="awards">
        {/* Sidebar */}
        <Sidebar />
        {/* Sales */}
        <Sales />
      </div>
    </>
  );
}

export default Awards;
