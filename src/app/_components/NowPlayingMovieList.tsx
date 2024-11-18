import { Suspense } from "react";
import { type TMovie } from "~/lib/types/MGTypes";
import MovieListCard from "./MovieListCard";
import MovieListWrapper from "./MovieListWrapper";

const MovieList = async (props: { movieListPromise: Promise<TMovie> }) => {
  const { results } = await props.movieListPromise;
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
