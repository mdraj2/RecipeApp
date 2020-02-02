import Header from "../Header";
import Results from "../Results";
import formatRecipeTitleInArrayOfObjects from "../Utils/formatRecipeTitleInArrayOfObjects";
import axios from "./../../api/recipesapi";
import "./base.scss";

import React from "react";

class App extends React.Component {
  state = { recipes: [] };

  render() {
    return (
      <div className="main">
        <Header getResults={this.setStateOnRecipes} />
        <Results
          results={formatRecipeTitleInArrayOfObjects(this.state.recipes)}
        />
      </div>
    );
  }

  setStateOnRecipes = async searchTerm => {
    try {
      this.setState({ recipes: "loading" });
      const recipes = await getRecipesForSearchTerm(searchTerm);
      this.setState({ recipes });
    } catch (error) {
      this.setState({ recipes: "notfound" });
    }
  };
}

/* Private functions */
const getRecipesForSearchTerm = async searchTerm => {
  const recipesAPIresponseObject = await axios.get(
    `api/search?&q=${searchTerm}`
  );
  return recipesAPIresponseObject.data.recipes;
};

export default App;
