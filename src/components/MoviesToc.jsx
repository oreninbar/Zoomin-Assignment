import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import "../style/moviesToc.css";
import { getMovies } from "../swapiReq";
import { TocRow } from "./TocRow";
import { useStore } from "../store/storeProvider";

export const MoviesToc = observer((props) => {
  const store = useStore();
  const [moviesList, setMoviesList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [all, setAll] = useState(true);
  const [favorites, setFavorites] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const movies = await getMovies();
      setMoviesList([...movies.results]);
      setLoading(true);
    }
    fetchData();
    return;
  }, []);

  const changeList = (name) => {
    if (name === "all" && !all) {
      setAll((all) => !all);
      setFavorites((favorites) => !favorites);
    } else if (name === "favorites" && !favorites) {
      setAll((all) => !all);
      setFavorites((favorites) => !favorites);
    }
  };

  return (
    <div className="movies-container">
      <div className="menu-filter">
        <div className={`all tab ${all}`} onClick={() => changeList("all")}>
          ALL
        </div>
        <div
          className={`favorites tab ${favorites}`}
          onClick={() => changeList("favorites")}
        >
          Favorite
        </div>
      </div>
      {loading && all
        ? moviesList.map((movie, i) => (
            <TocRow
              key={i}
              movieNumber={i + 1}
              title={movie.title}
              movie={props.film}
            />
          ))
        : loading && favorites
        ? moviesList.map((movie, i) =>
            store.isFavorite(i + 1) ? (
              <TocRow
                key={i}
                movieNumber={i + 1}
                title={movie.title}
                movie={props.film}
              />
            ) : null
          )
        : null}
    </div>
  );
});
