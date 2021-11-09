import { action, observable, makeObservable } from "mobx";

export class UserStore {
  moviePresented = 0;
  favoritesMovies = new Map();

  constructor() {
    makeObservable(this, {
      favoritesMovies: observable,
      moviePresented: observable,
      setMoviePresented: action,
      addToFavorites: action,
      removeFromFavorites: action,
      initFavoritesArr: action,
    });
    this.initFavoritesArr();
  }

  initFavoritesArr() {
    let tempArr = JSON.parse(localStorage.getItem("favoritesMovies"));
    if (tempArr)
      for (const movie of tempArr) {
        this.favoritesMovies.set(movie[0], movie[1]);
      }
  }

  isFavorite(movieNumber) {
    return this.favoritesMovies.has(movieNumber);
  }

  setMoviePresented = (movieNumber) => {
    this.moviePresented = movieNumber;
  };

  addToFavorites(movieNumber) {
    this.favoritesMovies.set(movieNumber, true);
    localStorage.favoritesMovies = JSON.stringify(this.favoritesMovies);
  }

  removeFromFavorites(movieNumber) {
    this.favoritesMovies.delete(movieNumber);
    localStorage.favoritesMovies = JSON.stringify(this.favoritesMovies);
  }
}
