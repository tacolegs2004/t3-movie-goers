import { Suspense } from "react";
import { type TMovie } from "~/lib/types/MovieTypes";
import MovieListCard from "./MovieListCard";
import MovieListWrapper from "./MovieListWrapper";

const NowPlayingMovieList = async ({
  nowPlayingMovieListPromise,
}: {
  nowPlayingMovieListPromise: Promise<TMovie>;
}) => {
  const { results } = await nowPlayingMovieListPromise;
  return (
    <MovieListWrapper>
      <Suspense fallback={<h1>Loading...</h1>}>
        {results.map((result) => (
          <MovieListCard key={result.id} result={result} />
        ))}
      </Suspense>
    </MovieListWrapper>
  );
};

export default NowPlayingMovieList;
