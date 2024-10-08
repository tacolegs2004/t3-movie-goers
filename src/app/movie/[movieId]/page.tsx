import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Image from "next/image";
import CommentComponent from "~/components/comment-component";
import getMovieCardId from "~/lib/getMovieCardId";
import { db } from "~/server/db";

type Comment = {
  name: string;
  avatar: string;
  body: string;
  rating: string;
  key: string;
  created_At: Date;
  updated_At: Date | null;
  userId: string;
  movieId: string;
  commentId: string;
};

const Page = async ({
  params,
}: {
  params: {
    movieId: string;
    comment: Comment;
  };
}) => {
  const movie = await getMovieCardId({ params });

  const commentSchema = await db.query.commentSchema.findMany();

  // const addCommentServerAction = async (formData: FormData) => {
  //   "use server";
  //   return await db.query.commentSchema.findFirst({
  //     where: {

  //       gee%
  //     },
  //   });
  // };

  return (
    <main className="flex flex-col items-center justify-center">
      <section>
        <div className="container mb-48 mt-12 flex h-screen flex-col items-center justify-center gap-4 p-24 lg:flex-row">
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            priority
            width={860}
            className="h-full w-[60%] rounded-lg border-2 border-slate-400 p-4 lg:mb-4 lg:ml-0 lg:mr-3 lg:mt-24 lg:h-full lg:w-[40%]"
            height={360}
          />
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
            <span className="mt-4">
              Rating: {movie.vote_average.toFixed()}/10
            </span>
            <blockquote className="text-ellipsis py-4 font-mono italic tracking-wide text-slate-600">
              {movie.overview}
            </blockquote>
          </section>
        </div>{" "}
      </section>

      <SignedIn>
        <section className="mt-16 gap-3 space-y-4">
          {commentSchema.map((comment) => (
            <CommentComponent key={comment.commentId} comment={comment} />
          ))}

          <form
            className="flex flex-col items-center justify-center gap-2"
            // action={addComment}
          >
            <input type="hidden" name="movieId" value={params.movieId} />
            <textarea
              id="comment"
              name="comment"
              required
              className="h-[200px] w-[300px] rounded-md border border-gray-300 p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 md:w-[900px]"
              placeholder="Type your comment here..."
            />
            <input
              id="rating"
              name="rating"
              required
              type="number"
              className="h-[50px] w-[300px] rounded-md border border-gray-300 p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 md:w-[900px]"
              placeholder="Rate the movie"
            />

            <button
              type="submit"
              className="ml-[48px] rounded-lg bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </section>
      </SignedIn>

      <SignedOut>
        <section className="flex flex-col items-center justify-center gap-2">
          <SignInButton>
            <button
              type="submit"
              className="mt-4 h-14 w-20 rounded-lg bg-blue-500 p-2 font-bold text-white hover:bg-blue-700"
            >
              Sign in
            </button>
          </SignInButton>
        </section>
      </SignedOut>
    </main>
  );
};

export default Page;
