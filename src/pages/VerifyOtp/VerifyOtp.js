import React, { useState } from "react";
import { useLocation } from "react-router";
import "./VerifyOtp.css";
function VerifyOtp() {
  const { state } = useLocation();
  const { Email } = state;
  const numOfFields = 3;

  const handleChange = (e) => {
    const { maxLength, value, name } = e.target;
    const [fieldName, fieldIndex] = name.split("-");

    // Check if they hit the max character length
    if (value.length >= maxLength) {
      // Check if it's not the last input field
      if (parseInt(fieldIndex, 10) < 4) {
        // Get the next input field
        const nextSibling = document.querySelector(
          `input[name=ssn-${parseInt(fieldIndex, 10) + 1}]`
        );

        // If found, focus the next field
        if (nextSibling !== null) {
          nextSibling.focus();
        }
      }
    }
  };
  // count stars
  const count = Email.length - 13;

  return (
    <div className="verify">
      <div className="overlay">
        <div className="verify__form">
          <h2 className="logo">SERB</h2>
          <p className="desc">
            Please enter the 4 digits verification code sent to
          </p>
          <p style={{ fontWeight: "bold", color: "var(--primary-color)" }}>
            {Email.slice(0, 2) +
              Array(count).fill("*").join("") +
              Email.slice(Email.length - 11, Email.length)}
          </p>

          {/* inputs */}
          <div className="inputs">
            <div className="inputs__box">
              <input
                type="text"
                name="ssn-1"
                maxLength={1}
                onChange={handleChange}
                autoFocus
              />

              <input
                type="text"
                name="ssn-2"
                onChange={handleChange}
                maxLength={1}
              />
              <input
                type="text"
                name="ssn-3"
                onChange={handleChange}
                maxLength={1}
              />
              <input
                type="text"
                maxLength={1}
                name="ssn-4"
                onChange={handleChange}
              />
            </div>
            {/* Didn't recieve */}

            {/* Form Footer */}
            <div style={{ color: "var(--primary-color)", margin: "20px 0" }}>
              <p style={{ color: "var(--primary-color)" }}>
                Didn’t recieve an OTP?
              </p>
              <p
                style={{
                  color: "var(--primary-color)",
                  textAlign: "center",
                  fontWeight: "bold",
                  textDecoration: "underline",
                  cursor: "pointer",
                  margin: "5px 0",
                }}
              >
                Resend OTP
              </p>
            </div>
            <div className="form__footer">
              <button>Verify</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifyOtp;
