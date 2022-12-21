import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

const MoviesDB = {
  action: [
    { name: "Bullet Train", rating: "7.3/10" },
    { name: "Top Gun: Maverick", rating: "8.4/10" }
  ],

  fiction: [
    {
      name: "Interstellar",
      rating: "8.6/10"
    },
    {
      name: "Inception",
      rating:"8.8/10"
    }
  ],
  adventure: [
    {
      name: " Avatar: The Way of Water (2022)",
      rating: "8.1/10"
    },
    {
      name: "Avatar",
      rating:"7.8/10"
    }
  ]
};


function App() {
  const textalign="center"
  const [selectedGenre, setGenre] = useState("action");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>  goodmovies </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite movies. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(MoviesDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: `${textalign}` }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {MoviesDB[selectedGenre].map((movie) => (
            <li
              key={movie.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {movie.name} </div>
              <div style={{ fontSize: "smaller" }}> {movie.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
