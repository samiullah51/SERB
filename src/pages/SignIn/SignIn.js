import React, { useState } from "react";
import { useNavigate } from "react-router";
import { publicRequest } from "../../requestMethods";
import "./SignIn.css";
function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Errors
  const [error, setError] = useState("");
  const [isVerifiedError, setIsVerifiedError] = useState(false);

  // Navigate Hook
  const navigate = useNavigate();

  // User Login Functionality
  const handleLogin = async () => {
    if (!email || !password) {
      setError("Please fill the required fields");
      return false;
    } else {
      try {
        const loginUser = await publicRequest.post("/user/login", {
          email,
          password,
        });
        loginUser && console.log(loginUser);
        navigate("/");
      } catch (err) {
        if (err.response.data === "User is not verified") {
          console.log(err.response.data);

          setIsVerifiedError(true);
          setError("Sorry, you are not verified");
        } else {
          setError(err.response.data);
        }
      }
    }
  };
  return (
    <div className="signin">
      <div className="overlay">
        <div className="signin__form">
          <h2 className="logo">SERB</h2>

          {!isVerifiedError ? (
            <>
              {error && (
                <div className="error__box">
                  <p>{error}</p>
                </div>
              )}
              <p className="desc">Log In To Your Account</p>
              {/* inputs */}
              <div className="inputs">
                <div className="inputs__box">
                  <p>Email</p>
                  <input
                    type="text"
                    placeholder="someone@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="inputs__box">
                  <p>Password</p>
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              {/* Form Footer */}
              <div className="form__footer">
                <button onClick={handleLogin}>Log in</button>
                <p>
                  Already have an account? <span>Login</span> here.
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="verified__box">
                <h3>Sorry, You are not verified</h3>
                <p>
                  Please click on the <b>Verify</b> button to get an OTP for
                  verification.
                </p>
              </div>
              {/* Form Footer */}
              <div className="form__footer">
                <button onClick={handleLogin}>Verify</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignIn;
