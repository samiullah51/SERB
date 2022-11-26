import React from "react";
import "./VerifyOtp.css";
function VerifyOtp() {
  const days = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const years = [];
  for (var i = 1990; i <= 2022; i++) {
    years.push(i);
  }
  return (
    <div className="register">
      <div className="overlay">
        <div className="register__form">
          <h2 className="logo">SERB</h2>
          <p className="desc">
            Please enter the 4 digits verification code sent to
          </p>
          <p style={{ fontWeight: "bold", color: "var(--primary-color)" }}>
            034xxxxxxx7
          </p>
          {/* inputs */}
          <div className="inputs">
            <div className="inputs__box">
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
            </div>

            {/* Form Footer */}
            <div className="form__footer">
              <button>Register Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifyOtp;
