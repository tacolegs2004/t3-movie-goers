import { Suspense } from "react";
import getMovies from "~/lib/getMovies";
import getSearchedMovies from "~/lib/getSearchedMovies";
import MovieListCard from "../_components/MovieListCard";
import Search from "../_components/Search";

export default async function Page(props: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const movieListReq = await getMovies("popular");
  const query = props.searchParams?.query ?? "";
  const searchMovies = await getSearchedMovies({ query: query });

  console.log("test");

  if (!searchMovies) return <div>Movies not found...</div>;

  return (
    <div className="flex flex-col items-center justify-center">
      <Search query={query} />
      <Suspense fallback={<h1>Loading results...</h1>}>
        <div className="grid w-[80vw] grid-cols-3 gap-24">
          {searchMovies
            ? searchMovies.results.map((movie) => (
                <MovieListCard result={movie} key={movie.id} />
              ))
            : movieListReq.results.map((movie) => (
                <MovieListCard result={movie} key={movie.id} />
              ))}
        </div>
      </Suspense>
    </div>
  );
}
