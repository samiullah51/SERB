import React from "react";
import "./Rating.css";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
function Rating() {
  return (
    <div className="rating">
      <div className="rating__left">
        <p className="rating__value">3.5</p>
        <div className="rating__stars">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarHalfIcon />
          <StarOutlineIcon />
        </div>
        <p className="rated__by">(45)</p>
      </div>
      <div className="rating__right">
        <div className="right__progress">
          <p>5</p>
          <div className="progress__bar">
            <div className="percent" style={{ width: "70%" }}></div>
          </div>
        </div>
        <div className="right__progress">
          <p>4</p>
          <div className="progress__bar">
            <div className="percent" style={{ width: "10%" }}></div>
          </div>
        </div>
        <div className="right__progress">
          <p>3</p>
          <div className="progress__bar">
            <div className="percent" style={{ width: "4%" }}></div>
          </div>
        </div>
        <div className="right__progress">
          <p>2</p>
          <div className="progress__bar">
            <div className="percent" style={{ width: "7%" }}></div>
          </div>
        </div>
        <div className="right__progress">
          <p>1</p>
          <div className="progress__bar">
            <div className="percent" style={{ width: "9%" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rating;
