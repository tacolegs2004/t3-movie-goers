import Image from "next/image";
import getMovieCardId from "~/lib/getMovieCardId";

type TParams = {
  params: {
    movieId: string;
  };
};

export default async function MovieCardId(params: TParams) {
  const movie = await getMovieCardId(params);
  return (
    <div className="flex items-center justify-center lg:mt-24">
      <section className="container my-4 ml-12 mr-12 flex flex-col items-center justify-center lg:h-screen lg:w-screen">
        <Image
          src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
          alt={movie.title}
          width={150}
          className=" mb-4 ml-8 mt-24 h-full w-[60%] pr-2 lg:ml-0 lg:mt-0 lg:h-[90%] lg:w-[40%] lg:pr-0"
          height={120}
        />
        <h1>{movie.title}</h1>
        <span>Original Language: {movie.original_language}</span>

        <span>
          Release Date:{" "}
          {new Date(movie.release_date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </span>
        <span className="mt-4">Rating: {movie.vote_average.toFixed()}/10</span>
        <blockquote className="mt-4 text-ellipsis px-8 py-4 font-mono italic tracking-wide text-slate-600">
          {movie.overview}
        </blockquote>
      </section>
    </div>
  );
}
