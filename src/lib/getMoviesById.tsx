import { TMovie } from "./types/MovieTypes";

export default async function getMoviesById(movieId: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.NEXT_APP_API_KEY}`,
  );

  if (!res.ok) {
    new Error("Fetching failed");
  }

  const data = (await res.json()) as TMovie;

  return data;
}
