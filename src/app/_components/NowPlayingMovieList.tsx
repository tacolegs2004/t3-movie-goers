import { Suspense } from "react";
import { type TMovie } from "~/lib/types/MovieTypes";
import MovieListCard from "./MovieListCard";
import MovieListWrapper from "./MovieListWrapper";

const MovieList = async ({
  movieListPromise,
}: {
  movieListPromise: Promise<TMovie>;
}) => {
  const { results } = await movieListPromise;
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <MovieListWrapper>
        {results.map((result) => (
          <MovieListCard result={result} key={result.id} />
        ))}
      </MovieListWrapper>
    </Suspense>
  );
};

export default MovieList;
