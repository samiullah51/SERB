import React from "react";
import "./SingleTransaction.css";
import { useState } from "react";
import TransactionModal from "../../../components/TransactionModal/TransactionModal";
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
            transaction.status === "Pending" || "pending"
              ? "#EE63AE"
              : "#4FDA86",
        }}
      >
        {transaction.status}
      </p>
      <div className="actions">
        <button className="confirm__btn">Confirm</button>
        <button className="cancel__btn">Cancel</button>
      </div>
    </div>
  );
}

export default SingleTransaction;
