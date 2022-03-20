import "./App.css";
import { useEffect } from "react";
import SearchIcon from "./search.svg";

const API_URL = "https://www.omdbapi.com?apikey=111f9341";
  const movie_1 = {
    Title: "The Shawshank Redemption",
    Year: "1994",
    imdbID: "tt0111161",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  };
const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
  

    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("The shawshank redemption");
  }, []);

  return (
    <div className="app">
      <h1>Movies N Chill</h1>

      <div className="search">
        <input
          placeholder="Search for movies here..."
          value="Superman"
          onChange={() => {}}
        />

        <img src={SearchIcon} alt="search" onClick={() => {}} />
      </div>

      <div className="container">
        <div className="movie">
          <div>
            <p>
              {movie_1.Year}
            </p>
          </div>
          <div>
            <img
              src={movie_1.Poster} alt="movie_1.Title">
              
              </img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
