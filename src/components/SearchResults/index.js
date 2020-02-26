import React from "react";
import "./searchResults.scss";
import Spinner from "./../Spinner";

class searchResults extends React.Component {
  render() {
    const allRecipes = this.props.allRecipes;
    if (allRecipes === "loading") return showSpinner();
    else if (allRecipes === "notfound") return showNotFoundText();
    else return this.resultList(allRecipes);
  }

  resultList(allRecipes) {
    return (
      <div className="result__list">
        <div className="result__itemscontainer">
          {this.JSXArrayOfRecipes(allRecipes)}
        </div>
      </div>
    );
  }

  JSXArrayOfRecipes(allRecipes) {
    return allRecipes.map(singleRecipe => {
      return (
        <div
          className="result__item"
          key={singleRecipe.recipe_id}
          onClick={() => {
            this.props.selectedRecipe(singleRecipe.recipe_id);
          }}
        >
          <div className="result__title">{singleRecipe.title}</div>
          <img
            alt={singleRecipe.title}
            className="result__image"
            src={singleRecipe.image_url}
          ></img>
        </div>
      );
    });
  }
}

const showSpinner = () => {
  return (
    <div className="result__loading">
      <Spinner />
    </div>
  );
};

const showNotFoundText = () => {
  return (
    <div className="result__loading result__loading--error">
      We dont have that in our cookbook
    </div>
  );
};

export default searchResults;
