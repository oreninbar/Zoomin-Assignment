import axios from "axios";

export const getMovies = async () => {
  try {
    const movies = await axios.get("https://swapi.dev/api/films");
    if (!movies) {
      return 400;
    }
    return movies.data;
  } catch (err) {
    console.error("Can't get the movies, error message: ", err);
  }
};

export const getMovie = async (filmNumber) => {
  try {
    const movie = await axios.get(`https://swapi.dev/api/films/${filmNumber}`);
    if (!movie) {
      return 400;
    }
    return movie.data;
  } catch (err) {
    console.error("Can't get the movies, error message: ", err);
  }
};
