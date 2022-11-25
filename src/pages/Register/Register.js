import React from "react";
import "./Register.css";
function Register() {
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
            Register Yourself to Sell, Exchange or Buy Products
          </p>
          {/* inputs */}
          <div className="inputs">
            <div className="inputs__box">
              <p>Full Name</p>
              <input type="text" placeholder="Example" />
            </div>
            <div className="inputs__box">
              <p>Username</p>
              <input type="text" placeholder="03xxxxxxxxx" />
            </div>
            <div className="inputs__box">
              <p>Password</p>
              <input type="password" placeholder="••••••••" />
            </div>
            <div className="inputs__box">
              <p>Confirm Password</p>
              <input type="password" placeholder="••••••••" />
            </div>
            {/* DOB */}
            <div className="inputs__box" style={{ width: "100%" }}>
              <p>Date of Birth</p>
              <select>
                <option hidden>DD</option>
                {days.map((d) => (
                  <option>{d < 10 ? `0${d}` : d}</option>
                ))}
              </select>
              <select>
                <option hidden>MM</option>
                {months.map((m) => (
                  <option>{m}</option>
                ))}
              </select>
              <select>
                <option hidden>YY</option>
                {years.map((y) => (
                  <option>{y}</option>
                ))}
              </select>
            </div>

            {/* Gender */}
            <div className="inputs__box" style={{ width: "100%" }}>
              <p>Gender</p>
              <select>
                <option hidden>Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <p style={{ fontSize: "13px", color: "var(--primary-color)" }}>
              By clicking Sign Up, you agree to our Terms, Privacy Policy and
              Cookies Policy. You may receive SMS notifications from us and can
              opt out at any time.
            </p>
            {/* Form Footer */}
            <div className="form__footer">
              <button>Register Now</button>
              <p>
                Already have an account? <span>Login</span> here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
