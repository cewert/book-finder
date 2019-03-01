import React from "react";
import "./BookCard.css";

function BookCard(props) {
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
          <div className="author">
            <span className="label">{props.authorTitle}:</span>
            <span className="data">
              <ul>{props.authors}</ul>
            </span>
          </div>
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
