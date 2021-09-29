const express = require("express");
const app = express();
const port = 5000;
const https = require("https");

const cors = require("cors");
app.use(cors());
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: false, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

let getMovies = async (api_options) => {
  const request = https.request(api_options, (res) => {
    res.on("data", (d) => {
      console.log(d);
      return d;
    });
  });

  request.on("error", (error) => {
    return error;
  });

  request.end();
};

const filmworld_options = {
  hostname: "webjetapitest.azurewebsites.net",
  port: 443,
  path: "/api/filmworld/movies",
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "x-access-token": "sjd1HfkjU83ksdsm3802k",
  },
};

const cinemaworld_options = {
  hostname: "webjetapitest.azurewebsites.net",
  port: 443,
  path: "/api/cinemaworld/movies",
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "x-access-token": "sjd1HfkjU83ksdsm3802k",
  },
};

app.get("/api/filmworld/movies", (req, response) => {
  // get movies

  const request = https.request(filmworld_options, (res) => {
    console.log(`statusCode: ${res.statusCode}`);
    res.on("data", (d) => {
      process.stdout.write(d);
      response.send(d);
    });
  });

  request.on("error", (error) => {
    console.error(error);
  });

  request.end();
});

app.get("/api/movies", (req, response) => {
  // get movies

  let movies = getSortedMovies();
  console.log(movies);
  // let sortedMovies = sortByCheapestMovie();

  response.send(movies);
});

let getSortedMovies = async () => {
  let cinemaWorldMovies = getMovies(cinemaworld_options);
  return cinemaWorldMovies;
};

app.get("/api/cinemaworld/movies", (req, response) => {
  // get movies

  const request = https.request(cinemaworld_options, (res) => {
    console.log(`statusCode: ${res.statusCode}`);
    res.on("data", (d) => {
      process.stdout.write(d);
      response.send(d);
    });
  });

  request.on("error", (error) => {
    console.error(error);
  });

  request.end();
});

//for getting 1 movie
app.get("/api/filmworld/movie/:id", (req, response) => {
  // get movies
  filmworld_options.path = "/api/filmworld/movie/" + req.params.id;

  const request = https.request(filmworld_options, (res) => {
    console.log(`statusCode: ${res.statusCode}`);
    res.on("data", (d) => {
      process.stdout.write(d);
      response.send(d);
    });
  });

  request.on("error", (error) => {
    console.error(error);
  });

  request.end();
});

app.get("/api/cinemaworld/movie/:id", (req, response) => {
  cinemaworld_options.path = "/api/cinemaworld/movie/" + req.params.id;

  const request = https.request(cinemaworld_options, (res) => {
    console.log(`statusCode: ${res.statusCode}`);
    res.on("data", (d) => {
      process.stdout.write(d);
      response.send(d);
    });
  });

  request.on("error", (error) => {
    console.error(error);
  });

  request.end();
});

app.listen(port, () => {
  console.log(`Webjet app listening at http://localhost:${port}`);
});
