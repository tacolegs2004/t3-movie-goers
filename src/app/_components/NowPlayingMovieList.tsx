"use client";
import { Suspense, use } from "react";
import { type TNowPlayingMovieObject } from "~/lib/types/MovieTypes";
import MovieListCard from "./MovieListCard";
import MovieListWrapper from "./MovieListWrapper";

export default function NowPlayingMovieList({
  nowPlayingMovieListPromise,
}: {
  nowPlayingMovieListPromise: Promise<TNowPlayingMovieObject>;
}) {
  const { results } = use(nowPlayingMovieListPromise);
  return (
    <MovieListWrapper>
      <Suspense fallback={<h1>Loading...</h1>}>
        {results.map((movie) => (
          <MovieListCard key={movie.id} results={movie} />
        ))}
        <span className="">
          <ArrowBigRightIcon />
        </span>
      </Suspense>
    </MovieListWrapper>
  );
}

function ArrowBigRightIcon() {
  function scrollRight() {
    window.scrollBy({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  }
  return (
    <>
      <svg
        onClick={scrollRight}
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 cursor-pointer text-black hover:text-gray-500"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10.707 3.293a1 1 0 010 1.414L7.414 9H17a1 1 0 110 2H7.414l3.293 3.293a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </>
  );
}
