import React from "react";
import "./searchResults.scss";

class searchResults extends React.Component {
  //this will need to render a list of images
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = { page: 1 };
  }

  componentDidUpdate() {}

  componentDidMount() {
    console.log(this.myRef.current);
  }

  render() {
    const allResult = this.props.results;
    if (allResult === "loading") {
      return <div className="result__list">Loading</div>;
    } else if (allResult === "notfound") {
      return (
        <div className="result__list">We dont have that in our cookbook</div>
      );
    }
    //it might be better to
    const resultList = allResult.map(result => {
      return (
        <div className="result__item" key={result.recipe_id}>
          <div className="result__title">{result.title}</div>
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
        <div className="result__itemscontainer" ref={this.myRef}>
          {resultList}
        </div>
      </div>
    );
  }
}

export default searchResults;
