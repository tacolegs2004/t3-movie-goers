import { type TMovie } from "./types/MovieTypes";

export default async function getPopularMovies(): Promise<TMovie> {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_APP_API_KEY}`,
  );

  if (!res.ok) {
    new Error("Fetching failed! Make sure you have a valid API key from TMDB.");
  } else {
    console.log("Fetch succeded");
  }

  const data = (await res.json()) as TMovie;

  return data;
}
