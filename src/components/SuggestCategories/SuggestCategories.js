import React from "react";
import "./SuggestCategories.css";
function SuggestCategories() {
  const categories = [
    "furniture",
    "vehicles",
    "photos",
    "mobile phones",
    "computers",
    "toys",
    "birds",
    "houses",
    "motercycles",
    "accessoris",
    "bikes",
  ];
  return (
    <div className="suggest__categories">
      <h1>Categories</h1>
      <div className="btns">
        {categories.map((cat) => (
          <button key={cat}>{cat}</button>
        ))}
      </div>
    </div>
  );
}

export default SuggestCategories;
