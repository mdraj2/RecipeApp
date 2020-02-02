import "./header.scss";

import React from "react";

class SearchBar extends React.Component {
  state = { searchTerm: "" };

  render() {
    return (
      <header className="header">
        <div className="header__logo">
          <h1 className="header__title">All Foods</h1>
          <svg className="icon header--icon">
            <use href="./sprite.svg#icon-spoon-knife" />
          </svg>
        </div>
        <form
          className="header__searchbar"
          onSubmit={this.getResultsForSearchTerm}
        >
          <input
            type="search"
            className="header__input"
            value={this.state.searchTerm}
            onChange={this.recordCurrentSearchTermOnState}
            placeholder="Beef"
          ></input>
          <button className="btn header--btn">Search</button>
        </form>
        <div className="header__favourites">
          <svg className=" icon header__favourites--icon">
            <use href="./sprite.svg#icon-star-full" />
          </svg>
        </div>
      </header>
    );
  }

  getResultsForSearchTerm = async event => {
    event.preventDefault();
    await this.props.getResults(this.state.searchTerm);
  };

  recordCurrentSearchTermOnState = event => {
    this.setState({ searchTerm: event.target.value });
  };
}

export default SearchBar;
