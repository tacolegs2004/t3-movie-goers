import { TMovie } from "@/src/lib/types/MovieTypes";
import { use } from "react";
import MovieListCard from "./MovieListCard";

export default function MovieSearchList({
  moviePromise,
}: {
  moviePromise: Promise<TMovie>;
}) {
  const results = use(moviePromise) as TMovie;
  results.results.map((result) => console.log(result));
  if (!results) {
    return <NullResults />;
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {results.results.map((result) => (
          <MovieListCard key={result.id} results={result} />
        ))}
      </div>
    </div>
  );
}

function NullResults() {
  return <div className="text-center text-2xl">No results found</div>;
}
