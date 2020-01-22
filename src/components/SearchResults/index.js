import React from "react";
import "./searchResults.scss";
import Spinner from "./../Spinner";

class searchResults extends React.Component {
  //this will need to render a list of images
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = { page: 1 };
  }

  componentDidUpdate() {}

  componentDidMount() {}

  render() {
    const allResult = this.props.results;
    if (allResult === "loading") {
      return (
        <div className="result__loading">
          <Spinner />
        </div>
      );
    } else if (allResult === "notfound") {
      return (
        <div className="result__list">We dont have that in our cookbook</div>
      );
    }
    //it might be better to
    const resultList = allResult.map(result => {
      return (
        <div className="result__item" key={result.recipe_id}>
          <div
            className="result__title"
            onClick={() => {
              console.log(result.recipe_id);
              return this.props.selectedRecipe(result.recipe_id);
            }}
          >
            {result.title}
          </div>
          <img
            alt={result.title}
            className="result__image"
            src={result.image_url}
          ></img>
        </div>
      );
    });
    //lifecycle methods are required
    //You will need to update the list when the pagination button is clicked
    //

    // Given a page render the appropraite number of

    return (
      <div className="result__list">
        <div className="result__itemscontainer">{resultList}</div>
      </div>
    );
  }
}

export default searchResults;
