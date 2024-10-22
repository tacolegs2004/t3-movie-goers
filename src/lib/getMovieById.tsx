import { type TMovieResult } from "./types/MGTypes";

export default async function getMovieById({
  params,
}: {
  params: { movieId: string };
}) {
  const resp = await fetch(
    `https://api.themoviedb.org/3/movie/${[params.movieId]}?api_key=${process.env.NEXT_APP_API_KEY}`,
  );

  if (!resp.ok) throw new Error("Failed to fetch movie data");

  return (await resp.json()) as TMovieResult;
}
