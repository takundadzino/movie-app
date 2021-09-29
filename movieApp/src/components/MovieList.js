import React from "react";
import MoreIcon from "@mui/icons-material/More";

const MovieList = ({ movies }) => {
  return (
    <>
      {movies &&
        movies.map((movie, index) => (
          <div className="d-flex justify-content-start m-3" key={movie.ID}>
            <img src={movie.Poster} alt="No poster found sorry"></img>
            <p>{movie.Title}</p>
            <p>{movie.Year}</p>
            <MoreIcon />
          </div>
        ))}
    </>
  );
};

export default MovieList;
