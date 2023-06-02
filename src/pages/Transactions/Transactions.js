import React from "react";
import "./Transactions.css";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Sales from "../../components/Sales/Sales";
import Profit from "../../components/Profit/Profit";
import SingleTransaction from "./SingleTransaction/SingleTransaction";
import { useState } from "react";
import { useEffect } from "react";
import { publicRequest } from "../../requestMethods";
import { useSelector } from "react-redux";
import { loader } from "../../loader";

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const user = useSelector((state) => state.user);
  // fetch all transactions
  useEffect(() => {
    const fetchTransactions = async () => {
      const allTransactions = await publicRequest.get(
        `/transaction/all/${user._id}`
      );
      setTransactions(allTransactions.data);
    };
    fetchTransactions();
  }, [transactions]);

  return (
    <>
      <Navbar />
      <div className="transactions">
        {/* Sidebar */}
        <Sidebar />
        {/* Sales */}
        <div className="transaction__container">
          <div className="transaction__header">
            <h1>Transactions</h1>
          </div>
          {/* single Transaction */}

          {/* single Transaction */}
          {transactions.length > 0 ? (
            transactions.map((transaction) => (
              <SingleTransaction
                key={transaction._id}
                transaction={transaction}
              />
            ))
          ) : (
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "100px",
              }}
            >
              <img src={loader} width={30} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Transactions;
