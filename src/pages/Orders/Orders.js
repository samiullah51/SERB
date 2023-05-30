import React from "react";
import "./Orders.css";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Sales from "../../components/Sales/Sales";
import Profit from "../../components/Profit/Profit";
import SingleTransaction from "./SingleTransaction/SingleTransaction";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { publicRequest } from "../../requestMethods";

function Orders() {
  const [orders, setOrders] = useState([]);
  const user = useSelector((state) => state.user);
  // fetch all transactions
  useEffect(() => {
    const fetchOrders = async () => {
      const allOrders = await publicRequest.get(`/order/all/${user._id}`);
      setOrders(allOrders.data);
    };
    fetchOrders();
  }, [orders]);
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
          {orders.map((order) => (
            <SingleTransaction key={order._id} order={order} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Orders;
