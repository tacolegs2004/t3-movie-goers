import { TNowPlayingMovieObject } from "./types/MovieTypes";

// export const getMoviesNowPlaying =
//   async (): Promise<TNowPlayingMovieObject> => {
export default async function getMoviesNowPlaying(): Promise<TNowPlayingMovieObject> {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.NEXT_APP_API_KEY}`,
  );

  if (!data.ok) {
    new Error("Fetching failed");
  } else {
    console.log("Fetch succeded");
  }

  const res = (await data.json()) as TNowPlayingMovieObject;

  return res;
}
