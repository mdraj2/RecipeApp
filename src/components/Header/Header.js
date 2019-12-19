//This component will make the searchbar
import React from "react";
import "./header.scss";
//This component i
class SearchBar extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="logo">
          <p className="logo__name">All Foods</p>
          <svg className="icon logo--icon">
            <use href="./sprite.svg#icon-spoon-knife" />
          </svg>
        </div>
        <form className="searchbar">
          <input className="searchbar__input"></input>
          <button className="searchbar__button">Search</button>
        </form>
        <div className="favourites">
          <svg className=" icon favourites--icon">
            <use href="./sprite.svg#icon-star-full" />
          </svg>
        </div>
      </header>
    );
  }
}

export default SearchBar;
