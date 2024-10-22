import { type TMovieResult } from "~/lib/types/MGTypes";
import MovieListCard from "./MovieListCard";

const MovieSearchList = async ({
  moviePromise,
}: {
  moviePromise: Promise<TMovieResult[]>;
}) => {
  const results = await moviePromise;
  if (!results) {
    return <div className="text-center text-2xl">No results found</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {results.map((result) => (
          <MovieListCard key={result.id} result={result} />
        ))}
      </div>
    </div>
  );
};

export default MovieSearchList;
