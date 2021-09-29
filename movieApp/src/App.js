import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/MovieList";
import axios from "axios";
import MovieListHeading from "./components/MovieListHeading";

const App = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const { data } = await axios.get(
      "http://localhost:5000/api/cinemaworld/movies",
      {
        mode: "no-cors",
      }
    );
    console.log(data);
    setMovies(data.Movies);
  };

  // const fetchOtherMovies = async () => {
  //   const { data } = await axios.get(
  //     "http://localhost:5000/api/filmworld/movies",
  //     {
  //       mode: "no-cors",
  //     }
  //   );
  //   console.log(data);
  //   setMovies(data.Movies);
  // };

  useEffect(() => {
    fetchMovies();
    // fetchOtherMovies();
  }, []);

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="🎥Movies🎥" />
      </div>
      <div className="row">
        <MovieList movies={movies} />
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="More coming soon😋😋😋" />
      </div>
    </div>
  );
};

export default App;
