import Image from "next/image";
import Link from "next/link";
import { type TMovieResult } from "~/lib/types/MovieTypes";

export default function MovieListCard({ results }: { results: TMovieResult }) {
  return (
    <div className="flex items-center justify-center">
      <span key={results.id} className="h-full sm:w-full sm:grid-cols-3">
        <span className="text-center">
          <Link
            href={`/movie/${results.id}`}
            className="text-center transition-all duration-200 ease-in-out hover:opacity-75 hover:shadow-2xl"
          >
            <Image
              src={"https://image.tmdb.org/t/p/w500" + results.poster_path}
              alt={results.title}
              width={90}
              className="fade ml-6 mt-6 h-fit w-full rounded-lg pr-2 transition duration-200 ease-in-out hover:scale-105 hover:shadow-2xl sm:ml-8"
              height={60}
            />
            <p className="ml-16 w-48 overflow-visible pt-4 text-center text-sm font-bold text-gray-900 transition-all duration-200 ease-in-out hover:underline sm:ml-8">
              {results.title}
            </p>
          </Link>
        </span>{" "}
      </span>
    </div>
  );
}
