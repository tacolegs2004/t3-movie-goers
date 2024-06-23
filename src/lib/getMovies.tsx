import { type TMovie } from "./types/MovieTypes";

const getMovies = async (param: string) => {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${param}?api_key=${process.env.NEXT_APP_API_KEY}`,
  );

  if (!data.ok) {
    new Error("Fetching failed");
  } else {
    console.log("Fetch succeded");
  }

  const res = (await data.json()) as TMovie;

  return res;
};

export default getMovies;
