import React, { useState } from "react";
import "./SingleTransaction.css";
import TransactionModal from "../../../components/TransactionModal/TransactionModal";
import BuyerModal from "../../../components/BuyerModal/BuyerModal";
function SingleTransaction() {
  const [modal, setModal] = useState(false);
  const [buyerModal, setBuyerModal] = useState(false);

  const status = "Pending";
  return (
    <div className="single__transaction">
      {modal && <TransactionModal setModal={setModal} />}
      {buyerModal && <BuyerModal setModal={setModal} />}
      <p>0x23dffs232443355</p>
      <p>33-Jan-2023</p>
      <p>12,000</p>
      <p className="details__btn product" onClick={() => setModal(true)}>
        Product Details
      </p>
      <p className="details__btn buyer" onClick={() => setBuyerModal(true)}>
        Buyer Details
      </p>
      <p
        className="transaction__status"
        style={{
          backgroundColor: status === "Pending" ? "#EE63AE" : "#4FDA86",
        }}
      >
        {status}
      </p>
    </div>
  );
}

export default SingleTransaction;
