import React, { Component } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import BookResults from "./components/BookResults/BookResults";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      results: false,
      books: []
    };

    this.handleQueryChange = this.handleQueryChange.bind(this);
    this.handleQuerySubmit = this.handleQuerySubmit.bind(this);
  }

  handleQueryChange(query) {
    this.setState({ searchQuery: query });
  }

  handleQuerySubmit() {
    // TODO add &startIndex= to query string to support paginating results
    if (this.state.searchQuery !== "") {
      let baseURL =
        "https://www.googleapis.com/books/v1/volumes?maxResults=40&q=";

      // get volume info from API
      fetch(baseURL + this.state.searchQuery)
        .then(response => {
          response.json().then(data => {
            // save volume info to state
            this.setState({ books: data.items, results: true });
            console.log(data.items);
          });
        })
        .catch(function(err) {
          console.log("Fetch Error", err);
        });
    }
    console.log("searchQuery = " + this.state.searchQuery);
  }

  render() {
    return (
      <div className="App">
        <h1>Book Finder</h1>
        <SearchBar
          searchQuery={this.state.searchQuery}
          handleQueryChange={this.handleQueryChange}
          handleQuerySubmit={this.handleQuerySubmit}
        />
        <BookResults
          searchQuery={this.state.searchQuery}
          books={this.state.books}
          results={this.state.results}
        />
      </div>
    );
  }
}

export default App;
