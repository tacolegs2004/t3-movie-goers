import { type TMovie } from "./types/MovieTypes";

export default async function getMovies(param: string) {
  const resp = await fetch(
    `https://api.themoviedb.org/3/movie/${param}?api_key=${process.env.NEXT_APP_API_KEY}`,
  );

  if (!resp.ok) throw new Error("Data failed to fetch.");

  const data = (await resp.json()) as TMovie;

  return data;
}
