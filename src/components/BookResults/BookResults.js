import React, { Component } from "react";
import BookCard from "../BookCard/BookCard";
import "./BookResults.css";

class BookResults extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let bookCardArray = [];
    let resultsFound = "";
    for (var i = 0; i < this.props.books.length; i++) {
      var item = this.props.books[i];

      let publisher = "N/A";
      let img = "https://via.placeholder.com/128x194?text=No+Image";
      // check if data exists before sending to bookcard

      bookCardArray[i] = (
        <BookCard
          title={item.volumeInfo.title}
          authors={item.volumeInfo.authors}
          publisher={item.volumeInfo.publisher}
          img={item.volumeInfo.imageLinks.thumbnail}
          link={item.volumeInfo.infoLink}
          key={item.id}
        />
      );
    }
    if (this.props.books.length > 0) {
      resultsFound = (
        <div id="resultsFound">
          Displaying {this.props.books.length} results
        </div>
      );
    }
    return (
      <div>
        {resultsFound}
        <div id="bookResults">{bookCardArray}</div>
      </div>
    );
  }
}

export default BookResults;
