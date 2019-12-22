//This component will make the searchbar
import React from "react";
import "./header.scss";
//This component i
class SearchBar extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header__logo">
          <p className="header__title">All Foods</p>
          <svg className="icon header--icon">
            <use href="./sprite.svg#icon-spoon-knife" />
          </svg>
        </div>
        <form className="header__searchbar">
          <input className="header__input"></input>
          <button className="btn header--btn">Search</button>
        </form>
        <div className="header__favourites">
          <svg className=" icon favourites--icon">
            <use href="./sprite.svg#icon-star-full" />
          </svg>
        </div>
      </header>
    );
  }
}

export default SearchBar;
