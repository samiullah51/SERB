import React from "react";
import "./SingleTransaction.css";
import { useState } from "react";
import TransactionModal from "../../../components/TransactionModal/TransactionModal";
import { publicRequest } from "../../../requestMethods";
function SingleTransaction({ transaction }) {
  const [modal, setModal] = useState(false);
  let transactionCreatedAt = new Date(transaction?.createdAt).toLocaleString(
    "en-US",
    {
      day: "numeric",
      year: "numeric",
      month: "long",
    }
  );

  const handleConfirm = async (id) => {
    const update = await publicRequest.put(`/product/sell/edit/${id}`, {
      status: "Sold",
    });
    const updateOrder = await publicRequest.put(`/order/edit/status/${id}`, {
      status: "Sold",
    });
    const updateTransactions = await publicRequest.put(
      `/transaction/edit/status/${id}`,
      {
        status: "Sold",
      }
    );
    window.location.reload();
  };

  return (
    <div className="single__transaction">
      {modal && <TransactionModal product={transaction} setModal={setModal} />}
      <p>{transaction._id}</p>
      <p>{transactionCreatedAt}</p>
      <p>{transaction.price}</p>
      <p className="details__btn" onClick={() => setModal(true)}>
        Product Details
      </p>
      <p
        className="transaction__status"
        style={{
          backgroundColor:
            transaction.status === "Pending" ? "#EE63AE" : "#4FDA86",
        }}
      >
        {transaction.status === "Sold" ? "Confirmed" : transaction.status}
      </p>
      <div className="actions">
        <button
          className="confirm__btn"
          onClick={() => handleConfirm(transaction.productId)}
        >
          Confirm
        </button>
        <button className="cancel__btn">Cancel</button>
      </div>
    </div>
  );
}

export default SingleTransaction;
