import React from "react";
import "./Review.css";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

function Review({ review }) {
  return (
    <div className="review">
      {/* Review Header */}
      <div className="review__header">
        <div className="header__left">
          <img src={review.profileImg} />
          <div className="reviewed__info">
            <p className="fullname">{review.fullName}</p>
            <div className="stars">
              {Array.from({ length: 5 }, (_, index) => {
                let number = index + 0.5;
                return (
                  <p>
                    {review.stars >= index + 1 ? (
                      <StarIcon />
                    ) : review.stars >= number ? (
                      <StarHalfIcon />
                    ) : (
                      <StarOutlineIcon />
                    )}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
        <p className="review__createdAt">{review.createdAt}</p>
      </div>
      {/* Review Body */}
      <p className="review__desc">{review.desc}</p>
    </div>
  );
}

export default Review;
