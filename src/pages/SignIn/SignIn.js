import React from "react";
import "./SignIn.css";
function SignIn() {
  return (
    <div className="signin">
      <div className="overlay">
        <div className="signin__form">
          <h2 className="logo">SERB</h2>
          <p className="desc">Log In To Your Account</p>
          {/* inputs */}
          <div className="inputs">
            <div className="inputs__box">
              <p>Phone Number</p>
              <input type="text" placeholder="03xxxxxxxxx" />
            </div>
            <div className="inputs__box">
              <p>Password</p>
              <input type="password" placeholder="••••••••" />
            </div>
          </div>

          {/* Form Footer */}
          <div className="form__footer">
            <button>Log in</button>
            <p>
              Already have an account? <span>Login</span> here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
