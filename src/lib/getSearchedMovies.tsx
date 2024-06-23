import { type TMovie } from "./types/MovieTypes";

const getSearchedMovies = async (params: {
  query?: string;
}): Promise<TMovie> => {
  const data = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${params.query}&api_key=${process.env.NEXT_APP_API_KEY}`,
  );

  if (!data.ok) {
    throw new Error("There was an error fetching the data");
  }

  const movies = (await data.json()) as TMovie;

  return movies;
};

export default getSearchedMovies;
