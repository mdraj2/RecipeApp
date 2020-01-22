import React from "react";
import DisplayRecipe from "./../DisplayRecipe";
import SearchResults from "./../SearchResults";
import equal from "fast-deep-equal";
import axios from "axios";

import "./results.scss";

class Results extends React.Component {
  //makes sense to setstate on this and passdown the prop to displayRecipe
  state = { selectedRecipe: null };

  onRecipeClick = async recipeID => {
    //clear out the previous image
    this.setState({ selectedRecipe: "loading" });
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
  //this is to update the details page when the search button is clicked
  componentDidUpdate(prevProps) {
    if (!equal(this.props.results, prevProps.results)) {
      this.setState({ selectedRecipe: null });
    }
  }

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
