import React from "react";
import "./displayRecipe.scss";

class DisplayRecipe extends React.Component {
  //this component will need to show the results
  state = { singleRecipe: "" };
  render() {
    return <div className="result__display">{this.state.singleRecipe}</div>;
  }
}

export default DisplayRecipe;
