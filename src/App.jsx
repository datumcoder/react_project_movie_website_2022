import React, { useState, useEffect } from "react";

import SearchIcon from "./search.svg";
import MovieCard from "./movieCard";

import "./App.css";

const API_URL = "https://www.omdbapi.com?apikey=111f9341";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("computer");
  }, []);

  return (
    <div className="app">
      <h1>Movie Posters</h1>
      <div className="search">
        <input id="enterSearch"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movie posters here..."
          
        />
        

        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies</h2>
        </div>
      )}
    </div>
  );
};

export default App;
