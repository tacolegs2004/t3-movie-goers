import Image from "next/image";
import Link from "next/link";
import { type TMovieResult } from "~/lib/types/MovieTypes";

const MovieListCard = (props: { result: TMovieResult }) => {
  return (
    <div className="items-centerh-full flex w-fit justify-center">
      <span
        key={props.result.id}
        className="flex h-fit items-center justify-center rounded-lg border-gray-700 bg-red-700 text-center transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-2xl md:h-full md:w-full dark:border-gray-300"
      >
        <Link
          href={`/movie/${props.result.id}`}
          className="rounded-lg border-2 p-8 transition-all duration-200 ease-in-out hover:scale-105 md:h-full md:w-full"
        >
          <Image
            src={"https://image.tmdb.org/t/p/w500" + props.result.poster_path}
            alt={`poster of  ${props.result.title}`}
            width={360}
            className="fade h-[360px] w-[360px] rounded-lg transition duration-200 ease-in-out hover:scale-105 hover:shadow-2xl"
            height={360}
          />
          <p className="mt-4 overflow-visible text-center text-sm font-bold text-gray-900 transition-all duration-200 ease-in-out hover:underline sm:ml-8 md:w-48 dark:text-white">
            {props.result.title}
          </p>
        </Link>
      </span>{" "}
    </div>
  );
};

export default MovieListCard;
