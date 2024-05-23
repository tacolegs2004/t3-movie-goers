"use client";
import { TMovie } from "@/src/lib/types/MovieTypes";
import React from "react";

export default function MovieResults() {
  const [query] = React.useState("");
  const [movieResults, setMovieResults] = React.useState<string>();
  const [isLoading, setIsLoading] = React.useState(false);
  const [setError] = React.useState<
    React.Dispatch<React.SetStateAction<unknown>>
  >(() => null);

  const handleMovies = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!movieResults) return null
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie?query=${movieResults}&api_key=${process.env.NEXT_APP_API_KEY}`,
      );

      const data = (await res.json()) as TMovie;
      setMovieResults(e.target.value);
      return data;
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
        setError(error);
      }
    }
    setIsLoading(false);
  };

  const handleSearch = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_APP_API_KEY}&query=${query}`,
      );
      const data = (await res.json()) as TMovie;

      return data;
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  };

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Search for a movie"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleMovies(e)}
        />
        <button onClick={() => handleSearch()}>Search</button>
      </form>
      {isLoading && <div>Loading...</div>}
    </>
  )
}

