import React from "react";

const MovieCard = ({movie1}) => {
  return (
    <div className="movie">
      <div>
        <p>{Year}</p>
      </div>
      <div>
        <img
          src={movie1.Poster !== "N/A" ? movie1.Poster : "https://via.placeholder.com/400"} alt={movie1.Title} />
      </div>
      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
