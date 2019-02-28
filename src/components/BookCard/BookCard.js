import React from "react";
import "./BookCard.css";

function BookCard(props) {
  let authorTitle = "Author";
  let authors = "";
  if (props.authors) {
    if (props.authors.length === 1) {
      authors = props.authors[0];
    } else {
      authorTitle = "Authors";
      authors = props.authors.map(author => <li>{author}</li>);
    }
  } else {
    authors = <li>N/A</li>;
  }

  return (
    <div className="bookCard">
      <a href={props.link} target="_BLANK" rel="noopener noreferrer">
        <img
          src={props.img}
          alt="Cover art for {props.data.volumeInfo.title}"
        />
      </a>
      <div className="bookData">
        <div className="bookDetails">
          <h3>{props.title}</h3>
          <p className="author">
            <span className="label">{authorTitle}:</span>
            <span className="data">
              <ul>{authors}</ul>
            </span>
          </p>
          <p className="publisher">
            <span className="label">Publisher:</span>
            <span className="data">{props.publisher}</span>
          </p>
        </div>
        <div className="bookLink">
          <a
            href={props.link}
            className="button"
            target="_BLANK"
            rel="noopener noreferrer"
          >
            See book
          </a>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
