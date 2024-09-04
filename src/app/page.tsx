import getMovies from "~/lib/getMovies";
import MovieList from "./_components/NowPlayingMovieList";

export default function Home() {
  const popularMovieListReq = getMovies("popular");
  const nowPlayingMovieListReq = getMovies("now_playing");

  return (
    <>
      <section>
        <h1 className="p-4 text-xl font-bold">Popular</h1>

        <MovieList movieListPromise={popularMovieListReq} />
      </section>
      <section>
        <h1 className="p-4 text-xl font-bold">Now Playing</h1>

        <MovieList movieListPromise={nowPlayingMovieListReq} />
      </section>
    </>
  );
}
