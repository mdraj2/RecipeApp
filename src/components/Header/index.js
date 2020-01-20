//This component will make the searchbar
import React from "react";
import "./header.scss";
//This component i

class SearchBar extends React.Component {
  state = { searchitem: "" };

  //callback getResults function in App component to update state results array
  onClick = async event => {
    event.preventDefault();
    this.props.getResults(this.state.searchitem);
  };

  onInputChange = event => {
    this.setState({ searchitem: event.target.value });
  };

  render() {
    return (
      <header className="header">
        <div className="header__logo">
          <p className="header__title">All Foods</p>
          <svg className="icon header--icon">
            <use href="./sprite.svg#icon-spoon-knife" />
          </svg>
        </div>
        <form className="header__searchbar" onSubmit={this.onClick}>
          <input
            type="search"
            className="header__input"
            value={this.state.searchitem}
            onChange={this.onInputChange}
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
}

export default SearchBar;
