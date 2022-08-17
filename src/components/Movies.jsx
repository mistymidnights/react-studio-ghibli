import React, { useState, useEffect } from "react";
import axios, { Axios } from "axios";
import MoviesCard from "./MoviesCard/MoviesCard";
import "./Movies.css";

const Movies = () => {
  const [moviesList, setMoviesList] = useState([]);
  const getMovies = async () => {
    const rawData = await axios.get("https://ghibliapi.herokuapp.com/films");
    setMoviesList(rawData.data);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className="movies">
      {moviesList.length > 0 ? (
        moviesList.map((movie) => (
          <MoviesCard moviesInfo={movie} key={movie.id} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Movies;
