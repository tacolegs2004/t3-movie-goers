import { Suspense } from "react";
import { type TMovie } from "~/lib/types/MovieTypes";
import MovieListCard from "./MovieListCard";
import MovieListWrapper from "./MovieListWrapper";

const PopularMovieList = async ({
  popularMoviePromise,
}: {
  popularMoviePromise: Promise<TMovie>;
}) => {
  const { results } = await popularMoviePromise;

  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <MovieListWrapper>
          {results.map((result) => (
            <MovieListCard key={result.id} result={result} />
          ))}
        </MovieListWrapper>
      </Suspense>
    </>
  );
};

export default PopularMovieList;
