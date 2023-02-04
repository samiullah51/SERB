import React, { useState } from "react";
import { useSelector } from "react-redux";
import { loader } from "../../loader";
import CloseIcon from "@mui/icons-material/Close";
function EditContainer({ setShow }) {
  const user = useSelector((state) => state.user);

  // user data
  const [fullName, setFullName] = useState(user.fullName);
  const [password, setPassword] = useState(user.password);

  // error
  const [error, setError] = useState("");
  // loading
  const [loading, setLoading] = useState(false);
  return (
    <>
      {/* Edit container */}
      <div className="edit__container">
        <div className="container__content">
          <div className="register__form">
            {/* Close btn */}
            <div
              className="register__form__close"
              onClick={() => setShow(false)}
            >
              <CloseIcon />
            </div>

            <h2 className="logo">Edit Profile</h2>
            <img src={user.profileImage} />
            {error && (
              <div className="error__box">
                <p>{error}</p>
              </div>
            )}
            {/* inputs */}
            <div className="inputs">
              <div className="inputs__box">
                <p>Full Name</p>
                <input
                  type="text"
                  placeholder="Example"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  autoFocus
                />
              </div>

              <div className="inputs__box">
                <p>Current Password</p>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="inputs__box">
                <p>New Password</p>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {/* Form Footer */}
              <div className="form__footer">
                <button>
                  {loading ? (
                    <img src={loader} width={15} height={15} />
                  ) : (
                    "Update Now"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditContainer;
