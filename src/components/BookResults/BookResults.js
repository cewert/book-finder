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
    if (Array.isArray(this.props.books)) {
      for (var i = 0; i < this.props.books.length; i++) {
        var item = this.props.books[i];
        // default values in case data is missing
        let publisher = "N/A";
        let img = "https://via.placeholder.com/128x194?text=No+Image";
        let authorTitle = "Author";
        let authors = "";
        // check if data exists before sending to bookcard
        if (item.volumeInfo.authors) {
          if (item.volumeInfo.authors.length > 1) {
            authorTitle = "Authors";
          }
          authors = item.volumeInfo.authors.map(author => (
            <li key={author}>{author}</li>
          ));
        } else {
          authors = <li>N/A</li>;
        }

        if (item.volumeInfo.imageLinks) {
          img = item.volumeInfo.imageLinks.thumbnail;
        }
        if (item.volumeInfo.publisher) {
          publisher = item.volumeInfo.publisher;
        }
        bookCardArray[i] = (
          <BookCard
            title={item.volumeInfo.title}
            authorTitle={authorTitle}
            authors={authors}
            publisher={publisher}
            img={img}
            link={item.volumeInfo.infoLink}
            key={item.id}
          />
        );
      }
    }
    // tell user how many books were found
    if (this.props.results === true) {
      let numResults = 0;
      if (this.props.books) {
        numResults = this.props.books.length;
      } else {
        numResults = 0;
      }
      resultsFound = (
        <div id="resultsFound">Displaying {0 + numResults} results</div>
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
