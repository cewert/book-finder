import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.handleQueryChange(event.target.value);
  }

  handleSubmit(event) {
    this.props.handleQuerySubmit();
    event.preventDefault();
  }

  render() {
    return (
      <div id="searchBar">
        <form onSubmit={this.handleSubmit}>
          <input
            id="searchQuery"
            type="text"
            size="50"
            placeholder="Search for books by Title or Author..."
            value={this.props.searchQuery}
            onChange={this.handleChange}
          />
          <input id="searchSubmit" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SearchBar;
