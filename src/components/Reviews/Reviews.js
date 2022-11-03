import React from "react";
import Review from "./Review/Review";
import { reviewsData } from "./reviewsData";
import "./Reviews.css";
function Reviews() {
  return (
    <div className="reviews">
      {reviewsData.map((review) => (
        <Review review={review} />
      ))}
    </div>
  );
}

export default Reviews;
