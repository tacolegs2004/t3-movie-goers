import Image from "next/image";
import { TMovieResult } from "~/lib/types/MGTypes";

export default function MovieIdPage({ movie }: { movie: TMovieResult }) {
  if (!movie) return null;

  return (
    <>
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        priority
        width={860}
        className="border-slate-40 h-full w-[60%] rounded-2xl border-2 lg:mb-4 lg:ml-0 lg:mr-3 lg:mt-24 lg:h-full lg:w-[50%]"
        height={360}
      />
      <div className="p-4" />
      <section className="prose flex flex-col items-center justify-center text-center font-normal lg:prose-lg prose-h1:text-4xl prose-h4:text-2xl prose-h4:font-normal prose-p:text-slate-600">
        <h1 className="text-lg font-semibold">{movie.title}</h1>
        <h4>Original Language: {movie.original_language}</h4>

        <h4>
          Release Date:{" "}
          {new Date(movie.release_date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </h4>
        <span className="mt-4">Rating: {movie.vote_average.toFixed()}/10</span>
        <blockquote className="text-ellipsis py-4 font-mono italic tracking-wide text-slate-600">
          {movie.overview}
        </blockquote>
      </section>
    </>
  );
}
