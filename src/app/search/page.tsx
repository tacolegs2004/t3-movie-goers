import { Suspense } from "react";
import getSearchedMovies from "~/lib/getSearchedMovies";
import MovieListCard from "../_components/MovieListCard";
import Search from "../_components/Search";

const Page = async (props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) => {
  const query = (await props.searchParams)?.query ?? "";
  const searchMovies = await getSearchedMovies({ query: query });

  if (!searchMovies) return <div>Movies not found.</div>;

  return (
    <div className="flex flex-col items-center justify-center">
      <Search query={query} />
      <Suspense fallback={<h1>Loading results...</h1>}>
        <div className="grid w-[80vw] grid-cols-3 gap-24">
          {searchMovies.results.map((movie) => (
            <MovieListCard result={movie} key={movie.id} />
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Page;
