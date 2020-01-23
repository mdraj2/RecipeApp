import React from "react";
import Header from "../Header";
import Results from "../Results";
import axios from "./../../api/recipesapi";

import "./base.scss";

class App extends React.Component {
  state = { recipes: [] };

  render() {
    return (
      <div className="main">
        <Header getResults={this.getRawResults} />
        <Results results={formatRecipeTitle(this.state.recipes)} />
      </div>
    );
  }

  getRawResults = async searchTerm => {
    try {
      this.setState({ recipes: "loading" });
      const recipesAPIresponseObject = await axios.get(
        `api/search?&q=${searchTerm}`
      );
      const recipesDataArray = recipesAPIresponseObject.data.recipes;
      this.setState({ recipes: recipesDataArray });
    } catch (error) {
      this.setState({ recipes: "notfound" });
    }
  };
}

/* Private functions */

const formatRecipeTitle = recipes => {
  if (Array.isArray(recipes)) {
    const formattedRecipeArray = createNewFormatedRecipeTitleArray(recipes);
    return formattedRecipeArray;
  }
  return recipes;
};

const createNewFormatedRecipeTitleArray = recipes => {
  const newFormattedArray = recipes.map(singleRecipe => {
    singleRecipe.title = convertUnicodeDecimalInRecipeTitle(singleRecipe.title);
    return singleRecipe;
  });
  return newFormattedArray;
};

const convertUnicodeDecimalInRecipeTitle = title => {
  const apostropheInUnicodeDecimalCode = "&#8217;";
  return convertUnicodeDecimalCodeToCharacterString(
    title,
    apostropheInUnicodeDecimalCode
  );
};

const convertUnicodeDecimalCodeToCharacterString = (
  orignalString,
  UnicodeDecimal
) => {
  let replaceUnicodeDecimalWith;
  if (UnicodeDecimal === "&#8217;") replaceUnicodeDecimalWith = "'";
  return orignalString.replace(UnicodeDecimal, replaceUnicodeDecimalWith);
};

export default App;
