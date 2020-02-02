import Spinner from "./../Spinner";
import "./displayRecipe.scss";

import React from "react";

class DisplayRecipe extends React.Component {
  state = { singleRecipe: "" };

  render() {
    if (this.props.recipe === "loading") return showSpinner();
    else if (this.props.recipe) return this.showRecipeDetails();
    else return null;
  }

  showRecipeDetails() {
    return (
      <div className="recipe__details">
        <img
          className="recipe__image"
          src={this.props.recipe.image_url}
          alt=""
        />
        <div className="recipe__title">{this.props.recipe.title}</div>
        <ul className="recipe__ingredients">
          {ingredients__list(this.props.recipe.ingredients)}
        </ul>
      </div>
    );
  }
}

const showSpinner = () => {
  return (
    <div className="recipe__loading">
      <Spinner />
    </div>
  );
};

const ingredients__list = allIngredients =>
  allIngredients.map((singleIngredient, index) => {
    return <li key={index}>{singleIngredient}</li>;
  });

export default DisplayRecipe;
