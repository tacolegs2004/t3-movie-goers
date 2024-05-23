import { Suspense, use } from "react";
import { type TMovie } from "~/lib/types/MovieTypes";
import MovieListCard from "./MovieListCard";
import MovieListWrapper from "./MovieListWrapper";

export default function PopularMovieList({
  popularMoviePromise,
}: {
  popularMoviePromise: Promise<TMovie>;
}) {
  const { results } = use(popularMoviePromise);

  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <MovieListWrapper>
          {results.map((movie) => (
            <MovieListCard key={movie.id} results={movie} />
          ))}
        </MovieListWrapper>
      </Suspense>
    </>
  );
}
