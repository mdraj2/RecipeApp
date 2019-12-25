import React from "react";
import Header from "../Header";
import Results from "../Results";
import axios from "./../../api/recipesapi";

import "./base.scss";

class App extends React.Component {
  state = { results: [] };

  componentDidUpdate() {}

  //Get results when search button is clicked and update state of results array
  getResults = async searchTerm => {
    this.setState({ results: "loading" });
    try {
      const res = await axios.get(`api/search?&q=${searchTerm}`);
      //Replace the unicode decimal code for apostrophe in the string recipes title
      //e.g from "bill&#8217;s burger" to "bill's burger"
      res.data.recipes.forEach((recipe, i) => {
        res.data.recipes[i].title = recipe.title.replace("&#8217;", "'");
      });
      this.setState({ results: res.data.recipes });
    } catch (err) {
      this.setState({ results: "notfound" });
    }
  };

  render() {
    return (
      <div className="main">
        <Header getResults={this.getResults} />
        <Results results={this.state.results} />
      </div>
    );
  }
}

export default App;
