import { type TMovie } from "./types/MovieTypes";

export default async function getMovieCardId(movieId: string) {
  const resp = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.NEXT_APP_API_KEY}`,
  );

  if (!resp.ok) throw new Error("Failed to fetch movie data");

  return (await resp.json()) as TMovie;
}
