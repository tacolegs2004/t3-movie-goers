import { type TMovie } from "./types/MGTypes";

export default async function getMovies(param: string) {
  const resp = await fetch(
    `https://api.themoviedb.org/3/movie/${param}?api_key=${process.env.NEXT_APP_API_KEY}`,
  );

  if (!resp.ok) throw new Error("Data failed to fetch.");

  return (await resp.json()) as TMovie;
}
