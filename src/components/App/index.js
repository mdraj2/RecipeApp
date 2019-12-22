import React from "react";
import Header from "../Header";
import Results from "../Results";

import "./base.scss";

class App extends React.Component {
  state = {};

  render() {
    return (
      <div className="main">
        <Header />
        <Results />
      </div>
    );
  }
}

export default App;
