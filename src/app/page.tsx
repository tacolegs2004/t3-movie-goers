import getMovies from "~/lib/getMovies";
import NowPlayingMovieList from "./_components/NowPlayingMovieList";
import PopularMovieList from "./_components/PopularMovieList";

export default function Home() {
  const popularMovieListReq = getMovies("popular");
  const nowPlayingMovieListReq = getMovies("now_playing");

  return (
    <>
      <main>
        <div className="gap-32">
          <div className="mb-8 ml-4 mt-4 flex flex-col items-center justify-center text-xl font-bold">
            <h1>Now Playing</h1>
          </div>
          <NowPlayingMovieList
            nowPlayingMovieListPromise={nowPlayingMovieListReq}
          />
          <br />
          <div className="mb-8 ml-4 mt-4 flex flex-col items-center justify-center pb-4 text-xl font-bold">
            <h1>Popular</h1>
          </div>
          <PopularMovieList popularMoviePromise={popularMovieListReq} />
          <br />
        </div>
      </main>
    </>
  );
}
