import { type TMovie } from "./types/MovieTypes";

export default async function getMovies(param: string) {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${param}?api_key=${process.env.NEXT_APP_API_KEY}`,
  );

  const res = (await data.json()) as TMovie;

  return res;
}
