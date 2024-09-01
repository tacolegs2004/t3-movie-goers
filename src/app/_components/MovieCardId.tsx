import Image from "next/image";
import getMovieCardId from "~/lib/getMovieCardId";

const MovieCardId = async ({ params }: { params: { movieId: string } }) => {
  const movie = await getMovieCardId({ params });

  return (
    <section className="justify-w-screen container flex h-screen flex-col items-center lg:mx-4 lg:ml-48 lg:mt-24">
      <Image
        src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
        alt={movie.title}
        priority
        width={150}
        className="mb-4 ml-8 mt-24 w-full pr-2 md:h-full md:w-[60%] lg:ml-0 lg:mt-0 lg:h-[90%] lg:w-[40%] lg:pr-0"
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
      <blockquote className="m-4 text-ellipsis px-8 py-4 font-mono italic tracking-wide text-slate-600">
        {movie.overview}
      </blockquote>
    </section>
  );
};

export default MovieCardId;
