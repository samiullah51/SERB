import React from "react";
import "./Transactions.css";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Sales from "../../components/Sales/Sales";
import Profit from "../../components/Profit/Profit";
import PaymentIcon from "@mui/icons-material/Payment";

function Transactions() {
  return (
    <>
      <Navbar />
      <div className="transactions">
        {/* Sidebar */}
        <Sidebar />
        {/* Sales */}
        <div className="transaction__container">
          <div className="transaction__header">
            <PaymentIcon />
            <h1>Transactions</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Transactions;
