import { Metadata } from "next";
import getMovies from "~/lib/getMovies";

import MovieList from "./_components/NowPlayingMovieList";

export const metadata: Metadata = {
  title: "Movie Goers",
  description: "An open-source movie-reviewing app.",
};

const Home = async () => {
  const popularMovieListReq = getMovies("popular");
  const nowPlayingMovieListReq = getMovies("now_playing");

  return (
    <div>
      <section>
        <h1 className="p-4 text-xl font-bold">Popular</h1>
        <MovieList movieListPromise={popularMovieListReq} />
      </section>
      <section>
        <h1 className="p-4 text-xl font-bold">Now Playing</h1>
        <MovieList movieListPromise={nowPlayingMovieListReq} />
      </section>
    </div>
  );
};
