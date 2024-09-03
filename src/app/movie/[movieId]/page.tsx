import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Image from "next/image";
import CommentComponent from "~/components/comment-component";
import getMovieCardId from "~/lib/getMovieCardId";
import { db } from "~/server/db";

const Page = async ({
  params,
}: {
  params: {
    movieId: string;
  };
}) => {
  const movie = await getMovieCardId({ params });
  const commentData = await db.query.commentSchema.findMany();
  // const newComments = [...commentData];

  const newComment = {
    name: "John Doe",
    avatar:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    body: "This is a comment",
    rating: "5",
    key: "comment-1",
    created_At: new Date(),
    updated_At: null,
    userId: "user-1",
    movieId: "533535",
    commentId: "comment-1",
  };

  return (
    <main className="flex flex-col items-center justify-center">
      <section>
        <div className="container mb-48 mt-12 flex h-screen flex-col items-center">
          <Image
            src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
            alt={movie.title}
            priority
            width={180}
            className="my-24 ml-8 w-full pr-2 md:h-full md:w-full lg:ml-0 lg:mt-0 lg:h-[800px] lg:w-[40%] lg:pr-0"
            height={140}
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
          <span className="mt-4">
            Rating: {movie.vote_average.toFixed()}/10
          </span>
          <blockquote className="m-4 text-ellipsis px-8 py-4 font-mono italic tracking-wide text-slate-600">
            {movie.overview}
          </blockquote>
        </div>{" "}
      </section>

      <SignedIn>
        <section className="mt-16 gap-3 space-y-4">
          {commentData.map(
            (comment) =>
              comment.movieId === params.movieId && (
                <CommentComponent comment={comment} key={comment.key} />
              ),
          )}

          <CommentComponent comment={newComment} />

          <form className="flex flex-col items-center justify-center gap-2">
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
