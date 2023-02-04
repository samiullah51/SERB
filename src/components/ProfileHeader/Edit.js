import React, { useState } from "react";
import { useSelector } from "react-redux";
import { loader } from "../../loader";

function Edit() {
  const user = useSelector((state) => state.user);

  // user data
  const [fullName, setFullName] = useState(user.fullName);
  const [password, setPassword] = useState(user.password);
  //   detail or edit
  const [details, setDetails] = useState(true);

  // error
  const [error, setError] = useState("");
  // loading
  const [loading, setLoading] = useState(false);

  return (
    <>
      <img src={user.profileImage} />

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
        {/* Description */}
        <div className="inputs__box">
          <p>Add Description</p>
          <textarea placeholder="Add some description about yourself..."></textarea>
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
    </>
  );
}

export default Edit;
