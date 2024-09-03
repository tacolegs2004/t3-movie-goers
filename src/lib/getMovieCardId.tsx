import { type TMovieResult } from "./types/MovieTypes";

export default async function getMovieCardId({
  params,
}: {
  params: { movieId: string };
}) {
  const resp = await fetch(
    `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=${process.env.NEXT_APP_API_KEY}`,
  );

  if (!resp.ok) throw new Error("Data failed to fetch.");

  const data = (await resp.json()) as TMovieResult;

  return data;
}
