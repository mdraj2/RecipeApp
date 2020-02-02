import DisplayRecipe from "./../DisplayRecipe";
import SearchResults from "./../SearchResults";
import formatRecipeTitleInArrayOfObjects from "../Utils/formatRecipeTitleInArrayOfObjects";
import "./results.scss";

import React from "react";
import equal from "fast-deep-equal";
import axios from "axios";

class Results extends React.Component {
  state = { selectedRecipe: null };

  render() {
    return (
      <div className="results">
        <SearchResults
          results={this.props.results}
          selectedRecipe={this.setStateOnSelectedRecipe}
        />
        <DisplayRecipe recipe={this.state.selectedRecipe} />
      </div>
    );
  }

  componentDidUpdate(prevProps) {
    this.clearSelectedRecipeIfNewSearch(prevProps.results);
  }

  clearSelectedRecipeIfNewSearch(previousResults) {
    //if the results array are not the same, then user must have requested for new recipes
    let newResults = !equal(this.props.results, previousResults);
    if (newResults) this.setState({ selectedRecipe: null });
  }

  setStateOnSelectedRecipe = async recipeID => {
    try {
      this.setState({ selectedRecipe: "loading" });
      const recipeDetails = await getDetailsforRecipe(recipeID);
      //wrap recipeDetails object in an array to use formatRecipeTitleInArrayOfObjects function
      const RecipeArray = formatRecipeTitleInArrayOfObjects([recipeDetails]);
      this.setState({ selectedRecipe: RecipeArray[0] });
    } catch (error) {
      throw error;
    }
  };
}

/* Private functions */
const getDetailsforRecipe = async recipeID => {
  const recipeDetailsAPIresponseObject = await axios(
    `https://forkify-api.herokuapp.com/api/get?rId=${recipeID}`
  );
  return recipeDetailsAPIresponseObject.data.recipe;
};

export default Results;
