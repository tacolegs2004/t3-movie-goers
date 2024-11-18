import { Suspense } from "react";
import { type TMovie } from "~/lib/types/MGTypes";
import MovieListCard from "./MovieListCard";

const PopularMovieList = async (props: {
  popularMoviePromise: Promise<TMovie>;
}) => {
  const { results } = await props.popularMoviePromise;

  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        {results.map((result) => (
          <MovieListCard key={result.id} result={result} />
        ))}
      </Suspense>
    </>
  );
};

export default PopularMovieList;
