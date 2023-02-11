import React from "react";
import { useParams } from "react-router";
import { useLocation } from "react-router-dom";
function Search() {
  const search = useLocation().search;
  const cat = new URLSearchParams(search).get("product");

  return <div>Search {cat}</div>;
}

export default Search;
