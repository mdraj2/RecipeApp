import React from "react";
import DisplayRecipe from "./../DisplayRecipe";
import SearchResults from "./../SearchResults";
import axios from "axios";

import "./results.scss";

class Results extends React.Component {
  //makes sense to setstate on this and passdown the prop to displayRecipe
  state = { selectedRecipe: null };

  onRecipeClick = async recipeID => {
    try {
      if (!recipeID) return "";
      const res = await axios(
        `https://forkify-api.herokuapp.com/api/get?rId=${recipeID}`
      );

      res.data.recipe.title = res.data.recipe.title.replace("&#8217;", "'");
      this.setState({ selectedRecipe: res.data.recipe });
      console.log(this.state);
    } catch (err) {
      throw err;
    }
  };

  render() {
    return (
      <div className="results">
        <SearchResults
          results={this.props.results}
          selectedRecipe={this.onRecipeClick}
        />
        <DisplayRecipe recipe={this.state.selectedRecipe} />
      </div>
    );
  }
}

export default Results;
