import React, { useEffect, useState } from "react";
import "../style/details.css";
import { observer } from "mobx-react";
import { useStore } from "../store/storeProvider";
import { getMovie } from "../swapiReq";
import { MovieDetailsRow } from "./MovieDetailsRow";

export const MovieDetails = observer(() => {
  const store = useStore();
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      if (store.moviePresented) {
        let tempMovie = await getMovie(store.moviePresented);
        setMovie(tempMovie);
        setLoading(true);
      }
    }
    fetchData();
    return
  }, [store.moviePresented]);

  return (
    <div className="card-container">
      {loading && (
        <div className="details-wrapper">
          <ul>
            <li>
              <MovieDetailsRow title={`Title :`} detail={movie.title} />
            </li>
            <li>
              <MovieDetailsRow title={`Director :`} detail={movie.director} />
            </li>
            <li>
              <MovieDetailsRow title={`Producer :`} detail={movie.producer} />
            </li>
            <li>
              <MovieDetailsRow
                title={`Summary :`}
                detail={movie.opening_crawl}
              />
            </li>
            <li>
              <MovieDetailsRow
                title={`Release Date :`}
                detail={movie.release_date}
              />
            </li>
            <li>
              <MovieDetailsRow
                title={`Episodeid :`}
                detail={movie.episode_id}
              />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
});
