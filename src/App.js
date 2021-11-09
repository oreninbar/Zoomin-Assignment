import React from "react";
import "./App.css";
import { MovieDetails } from "./components/MovieDetails";
import { MoviesToc } from "./components/MoviesToc";
const App = () => {

  return (
    <div className="App">
      <div className="app-container">
        <MoviesToc />
        <MovieDetails />
      </div>
    </div>
  );
};

export default App;
