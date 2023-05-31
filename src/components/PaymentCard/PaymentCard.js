import React, { useState } from "react";
import "./PaymentCard.css"; // Import your CSS file
import { Link } from "react-router-dom";
// import paid from "../../../public/images/paid.png";
import { publicRequest } from "../../requestMethods";
import { useEffect } from "react";
import { useSelector } from "react-redux";
const PaymentCard = ({ setShow, product }) => {
  const [inputValue, setInputValue] = useState("");
  const [isPaid, setIsPaid] = useState(false);
  const [cvv, setCvv] = useState("");
  const [sellerInfo, setSellerInfo] = useState("");
  const user = useSelector((state) => state.user);
  console.log(sellerInfo);
  // get seller info
  useEffect(() => {
    const getUserInfo = async () => {
      const gotUser = await publicRequest.get(
        `/product/sell/details/${product._id}`
      );
      setSellerInfo(gotUser.data);
    };
    getUserInfo();
  }, [product]);

  const handleInputChange = (e) => {
    const enteredValue = e.target.value;
    console.log(product);
    // Remove any non-digit characters
    const digitsOnly = enteredValue.replace(/\D/g, "");

    // Limit the input length
    const maxLength = 16; // Maximum allowed length of digits
    const limitedValue = digitsOnly.slice(0, maxLength);

    // Update the input value state
    setInputValue(limitedValue);
  };
  const handleCvv = (e) => {
    const enteredValue = e.target.value;

    // Remove any non-digit characters
    const digitsOnly = enteredValue.replace(/\D/g, "");

    // Limit the input length
    const maxLength = 3; // Maximum allowed length of digits
    const limitedValue = digitsOnly.slice(0, maxLength);

    // Update the input value state
    setCvv(limitedValue);
  };

  // hanlde payment
  const handlePayment = async () => {
    // setIsPaid(true);
    const postTransaction = await publicRequest.post(`/transaction/add`, {
      userId: user._id,
      productId: sellerInfo.details._id,
      title: sellerInfo.details.title,
      description: sellerInfo.details.description,
      location: sellerInfo.details.location,
      condition: sellerInfo.details.condition,
      price: sellerInfo.details.price,
      photo: sellerInfo.details.photos[0],
      status: "Pending",
      belongsToPicture: sellerInfo.By.profileImage,
      belongsToName: sellerInfo.By.fullName,
      belongsToDescription: sellerInfo.By.description,
      belongsToLevel: sellerInfo.By.level,
      belongsToRating: 3.5,
    });
    const update = await publicRequest.put(
      `/product/sell/edit/${product._id}`,
      {
        status: "Pending",
      }
    );
    const postOrder = await publicRequest.post(`/order/add`, {
      userId: sellerInfo.By._id,
      productId: sellerInfo.details._id,
      title: sellerInfo.details.title,
      description: sellerInfo.details.description,
      location: sellerInfo.details.location,
      condition: sellerInfo.details.condition,
      price: sellerInfo.details.price,
      photo: sellerInfo.details.photos[0],
      status: "Pending",
      buyerPicture: user.profileImage,
      buyerName: user.fullName,
      buyerDescription: user.description,
      buyerLevel: user.level,
      buyerRating: 4,
    });
    console.log(postTransaction);
    console.log(postOrder);
  };

  return !isPaid ? (
    <div className="payment_card">
      <p className="paymentcard">Payment Card</p>
      <div className="amount">
        <p>Pay for</p>
        <h1>{product.title}</h1>
        <p>Amount</p>
        <h1>
          {product.price} <span style={{ fontSize: "16px" }}> (PKR)</span>{" "}
        </h1>
      </div>
      <div className="card">
        <div className="singleinput">
          <label htmlFor="">Card Number (16 Digits) </label>
          <input
            type="number"
            value={inputValue}
            maxLength={16}
            onInput={handleInputChange}
            autoFocus
          />
        </div>
        <div className="card2">
          <div className="singleinput">
            <label htmlFor="">Expiry date</label>
            <input type="date" id="date" />
          </div>
          <div className="singleinput cvv">
            <label htmlFor="">CVV (3 Digits)</label>
            <input
              type="number"
              value={cvv}
              maxLength={3}
              onInput={handleCvv}
              id="ccv"
              placeholder="CVV"
            />
          </div>
        </div>
      </div>
      <div className="btns">
        <button className="cancel" onClick={() => setShow(false)}>
          Cancel
        </button>
        <button className="pay" onClick={handlePayment}>
          Pay Now
        </button>
      </div>
    </div>
  ) : (
    <div className="paid">
      <h1>You have paid Successfully</h1>
      <img src="../../images/paid.png" alt="" />
      <Link style={{ color: "#fff", textDecoration: "underline" }}>
        Check Transactions
      </Link>
      <p>
        Your payment is safe with SERB right now. You will recieve your product
        soon.
      </p>
      <Link className="okBtn" onClick={() => setShow(false)}>
        OK
      </Link>
    </div>
  );
};

export default PaymentCard;
