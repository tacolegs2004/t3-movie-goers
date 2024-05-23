import { use } from "react";
import { type TMovie } from "~/lib/types/MovieTypes";
import MovieListCard from "./MovieListCard";

export default function MovieSearchList({
  moviePromise,
}: {
  moviePromise: Promise<TMovie>;
}) {
  const results = use(moviePromise);
  if (!results) {
    return <div className="text-center text-2xl">No results found</div>;
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {results.results.map((result) => (
          <MovieListCard key={result.id} results={result} />
        ))}
      </div>
    </div>
  );
}
