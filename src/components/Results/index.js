import React from "react";
import DisplayRecipe from "./../DisplayRecipe";
import SearchResults from "./../SearchResults";

import "./results.scss";

const Results = props => {
  return (
    <div className="results">
      <SearchResults />
      <DisplayRecipe />
    </div>
  );
};

export default Results;
