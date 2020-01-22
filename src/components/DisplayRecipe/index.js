import React from "react";
import "./displayRecipe.scss";
import Spinner from "./../Spinner";

class DisplayRecipe extends React.Component {
  //this component will need to show the results
  state = { singleRecipe: "" };

  componentDidUpdate() {
    console.log(this.props);
  }

  render() {
    if (this.props.recipe === "loading") {
      return (
        <div className="recipe__loading">
          <Spinner />
        </div>
      );
    }

    if (this.props.recipe) {
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
    return null;
  }
}

const ingredients__list = allIngredients =>
  allIngredients.map((singleIngredient, index) => {
    return <li key={index}>{singleIngredient}</li>;
  });

export default DisplayRecipe;
