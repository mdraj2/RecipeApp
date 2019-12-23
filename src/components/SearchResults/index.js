import React from "react";
import "./searchResults.scss";

const searchResults = props => {
  //this will need to render a list of images
  const results = props.results;
  const resultList = results.map(result => {
    return (
      <div className="result__item" key={result.recipe_id}>
        {result.title}
      </div>
    );
  });
  return <div className="result__list">{resultList}</div>;
};

export default searchResults;
