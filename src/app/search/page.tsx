import { Suspense } from "react";
import getPopularMovies from "~/lib/getPopularMovies";
import getSearchedMovies from "~/lib/getSearchedMovies";
import MovieListCard from "../_components/MovieListCard";
import Search from "../_components/Search";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const movieListReq = await getPopularMovies();
  const query = searchParams?.query ?? "";
  const searchMovies = await getSearchedMovies({ query: query });

  if (!searchMovies) return <div>Movies not found...</div>;

  return (
    <div className="flex flex-col items-center justify-center">
      <Search query={query} />
      <Suspense fallback={<h1>Loading results...</h1>}>
        <div className="grid w-[80vw] grid-cols-3 gap-24">
          {searchMovies
            ? searchMovies.results.map((movie) => (
                <MovieListCard results={movie} key={movie.id} />
              ))
            : movieListReq.results.map((movie) => (
                <MovieListCard results={movie} key={movie.id} />
              ))}
        </div>
      </Suspense>
    </div>
  );
}
