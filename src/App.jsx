import "./App.css";
import { useEffect } from "react";
import SearchIcon from './search.svg';

const API_URL = "https://www.omdbapi.com?apikey=111f9341";

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("The shawshank redemption");
  }, []);

  return <div className="app">
    <h1> Movies N Chill</h1>


    <div className="search">
      
      <input
        
        placeholder="Search for movies here..."
        value="Superman"
        onChange={() => {}}
      />
      
      <img src="SearchIcon" alt="" />
      
      

    </div>
  </div>;
};

export default App;
