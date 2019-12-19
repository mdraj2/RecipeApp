import React from "react";
import Header from "../Header/Header";
import "./base.scss";

class App extends React.Component {
  state = {};

  render() {
    return (
      <div className="main">
        <Header />
      </div>
    );
  }
}

export default App;
