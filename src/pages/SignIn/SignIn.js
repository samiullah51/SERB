import React, { useState } from "react";
import { useNavigate } from "react-router";
import { loader } from "../../loader";
import { publicRequest } from "../../requestMethods";
import "./SignIn.css";
function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Errors
  const [error, setError] = useState("");
  const [isVerifiedError, setIsVerifiedError] = useState(false);
  // loading
  const [loading, setLoading] = useState(false);
  // Navigate Hook
  const navigate = useNavigate();

  // User Login Functionality
  const handleLogin = async () => {
    if (!email || !password) {
      setError("Please fill the required fields");
      return false;
    } else {
      setLoading(true);
      try {
        const loginUser = await publicRequest.post("/user/login", {
          email,
          password,
        });
        loginUser && console.log(loginUser);
        navigate("/");
        setLoading(false);
      } catch (err) {
        setLoading(false);
        if (err.response.data === "User is not verified") {
          setIsVerifiedError(true);
          setError("Sorry, you are not verified");
        } else {
          setError(err.response.data);
        }
      }
    }
  };

  // handle verified
  const handleVerified = async () => {
    try {
      const resendOtp = await publicRequest.post("/user/resend/verification", {
        email,
      });
      resendOtp && console.log(resendOtp);
      navigate("/verifyotp", { state: { Email: email } });
    } catch (err) {
      console.log(err);
      setError(err.response.data);
    }
  };

  return (
    <div className="signin">
      <div className="overlay">
        <div className="signin__form">
          {!isVerifiedError ? (
            <>
              {error && (
                <div className="error__box">
                  <p>{error}</p>
                </div>
              )}
              <h2 className="logo">SERB</h2>
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
                <button onClick={handleLogin}>
                  {loading ? (
                    <img src={loader} width={15} height={15} />
                  ) : (
                    "Log In"
                  )}
                </button>
                <p>
                  Already have an account? <span>Login</span> here.
                </p>
              </div>
            </>
          ) : (
            <>
              <h2 className="logo">SERB</h2>

              <div className="verified__box">
                <h3>Sorry, You Are Not Verified</h3>
                <p>
                  Please click on the <b>Verify</b> button to get an OTP for
                  verification.
                </p>
              </div>
              {/* Form Footer */}
              <div className="form__footer">
                <button onClick={handleVerified}>Verify your account</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignIn;
