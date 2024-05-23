import { type TMovieResult } from "./types/MovieTypes";

export default async function getMovieCardId({
  params,
}: {
  params: {
    movieId: string;
  };
}) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=${process.env.NEXT_APP_API_KEY}`,
  );

  if (!res.ok) {
    new Error("Fetching failed");
  }

  const movie = (await res.json()) as TMovieResult;

  return movie;
}
