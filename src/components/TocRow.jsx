import { observer } from "mobx-react";
import { useStore } from "../store/storeProvider";
import React, { useEffect, useState } from "react";
import "../style/movieRow.css";

export const TocRow = observer((props) => {
  const store = useStore();
  const [isFavorite, setIsFavorite] = useState();

  const rowPressed = (movieNumber) => {
    try {
      store.setMoviePresented(movieNumber);
    } catch (err) {
      console.error("Error message: ", err);
    }
  };

  const starPressed = (movieNumber) => {
    if (!isFavorite) {
      store.addToFavorites(movieNumber);
    } else store.removeFromFavorites(movieNumber);
    setIsFavorite((isFavorite) => !isFavorite);
  };

  useEffect(() => {
    if (store.favoritesMovies.has(props.movieNumber)) setIsFavorite(true);
  }, [props.movieNumber,store.favoritesMovies]);

  return (
    <div className="movie_title-container">
      <div
        className="title-wrapper"
        onClick={() => rowPressed(props.movieNumber)}
      >
        <h1 className="title">{props.title}</h1>
      </div>
      <div
        className="star-wrapper"
        onClick={() => starPressed(props.movieNumber)}
      >
        <i className={`fas fa-star ${isFavorite}`}></i>{" "}
      </div>
    </div>
  );
});
