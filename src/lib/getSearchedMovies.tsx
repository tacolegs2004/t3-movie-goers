import { type TMovie } from "./types/MGTypes";

const getSearchedMovies = async (params: {
  query?: string;
}): Promise<TMovie> => {
  const resp = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${params.query}&api_key=${process.env.NEXT_APP_API_KEY}`,
  );

  if (!resp.ok) throw new Error("Data failed to fetch.");

  const data = (await resp.json()) as TMovie;

  return data;
};

export default getSearchedMovies;
