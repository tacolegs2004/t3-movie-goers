import { type TMovieResult } from "./types/MovieTypes";

const getMovieCardId = async ({ params }: { params: { movieId: string } }) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=${process.env.NEXT_APP_API_KEY}`,
  );

  if (!res.ok) {
    throw new Error("There was an error fetching the data");
  }

  const movie = (await res.json()) as TMovieResult;

  return movie;
};

export default getMovieCardId;
