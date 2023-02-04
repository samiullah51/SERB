import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./ProfileHeader.css";
import EditIcon from "@mui/icons-material/Edit";
function ProfileHeader() {
  const user = useSelector((state) => state.user);
  let sinceJoin = new Date(user?.createdAt).toLocaleString("en-US", {
    day: "numeric",
    year: "numeric",
    month: "long",
  });
  // user data
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [gender, setGender] = useState("");
  // error
  const [error, setError] = useState("");
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
    <div className="profile__header">
      {/* Edit button */}
      <div className="edit__profile">
        <EditIcon />
      </div>
      {/* Edit container */}
      <div className="edit__container">
        <div className="container__content">
          <img src={user.profileImage} />
          <div className="register__form">
            {error && (
              <div className="error__box">
                <p>{error}</p>
              </div>
            )}
            <h2 className="logo">SERB</h2>
            <p className="desc">
              Register Yourself to Sell, Exchange or Buy Products
            </p>
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
              <div className="inputs__box">
                <p>Confirm Password</p>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={cpassword}
                  onChange={(e) => setCpassword(e.target.value)}
                />
              </div>
              {/* DOB */}
              <div className="inputs__box" style={{ width: "100%" }}>
                <p>Date of Birth</p>
                <select onChange={(e) => setBirthDay(e.target.value)}>
                  <option hidden>DD</option>
                  {days.map((d) => (
                    <option value={d < 10 ? `0${d}` : d}>
                      {d < 10 ? `0${d}` : d}
                    </option>
                  ))}
                </select>
                <select onChange={(e) => setBirthMonth(e.target.value)}>
                  <option hidden>MM</option>
                  {months.map((m) => (
                    <option value={m}>{m}</option>
                  ))}
                </select>
                <select onChange={(e) => setBirthYear(e.target.value)}>
                  <option hidden>YY</option>
                  {years.map((y) => (
                    <option value={y}>{y}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="profile__img" src={user.profileImage} />
      <div className="profile__info">
        <p className="info__name">{user.fullName}</p>
        <p className="info__from">{sinceJoin}</p>
      </div>
      <img
        className="level__img"
        src="https://static.vecteezy.com/system/resources/previews/004/946/876/non_2x/winner-badge-concepts-vector.jpg"
      />
    </div>
  );
}

export default ProfileHeader;
