import React from "react";
import "./MoviesCard.css";

const MoviesCard = ({ moviesInfo }) => {
  return (
    <figure className="movie-container">
      <h3>{moviesInfo.original_title}</h3>
      <h4>{moviesInfo.title}</h4>
      <div className="image-container">
        <img src={moviesInfo.image} alt="" />
      </div>
      <p className="description">{moviesInfo.description}</p>
      <div className="production">
        <p>director: {moviesInfo.director}</p>
        <p>producer: {moviesInfo.producer}</p>
        <p>relase: {moviesInfo.release_date}</p>
      </div>
    </figure>
  );
};

export default MoviesCard;
