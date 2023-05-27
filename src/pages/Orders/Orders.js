import React from "react";
import "./Orders.css";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Sales from "../../components/Sales/Sales";
import Profit from "../../components/Profit/Profit";
import SingleTransaction from "./SingleTransaction/SingleTransaction";

function Orders() {
  return (
    <>
      <div className="orders">
        {/* Sales */}
        <div className="transaction__container">
          <div className="transaction__header">
            <h1>Orders</h1>
          </div>
          {/* single Transaction */}

          {/* single Transaction */}
          <SingleTransaction />
          <SingleTransaction />
        </div>
      </div>
    </>
  );
}

export default Orders;
