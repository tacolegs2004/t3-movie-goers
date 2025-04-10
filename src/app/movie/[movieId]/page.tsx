import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { Metadata } from "next";
import Comment from "~/app/_components/Comment";
import MovieIdPage from "~/app/_components/MovieIdPage";
import getMovieById from "~/lib/getMovieById";
import { db } from "~/server/db";

export const metadata: Metadata = {
  title: "Movie Goers",
  description: "Generated by create next app",
};

const Page = async ({ params }: { params: { movieId: string } }) => {
  const movie = await getMovieById({ params });
  const commentSchema = await db.query.commentSchema.findMany();

  return (
    <main className="flex flex-col items-center justify-center">
      <div className="container my-48 flex h-screen flex-col items-center justify-center gap-2 md:my-96 md:-mb-4 md:mt-40 lg:-mt-4 lg:flex-row">
        <MovieIdPage movie={movie} />
      </div>

      <SignedIn>
        <div className="gap-3 space-y-4 lg:mt-24">
          {commentSchema ? (
            commentSchema.map((comment) => (
              <Comment key={comment.commentId} comment={comment} />
            ))
          ) : (
            <div className="flex h-full w-fit items-center justify-center">
              <span className="flex h-fit items-center justify-center rounded-lg border-gray-700 text-center transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-2xl dark:border-gray-300 lg:h-full lg:w-full">
                <p className="mt-4 overflow-visible text-center text-sm font-bold text-gray-900 transition-all duration-200 ease-in-out hover:underline dark:text-white sm:ml-8 md:w-48">
                  No comments yet
                </p>
              </span>
            </div>
          )}

          <form className="flex flex-col items-center justify-center gap-2">
            {/** <input type="hidden" name="movieId" value={params.movieId} /> */}
            <textarea
              id="comment"
              name="comment"
              required
              className="h-[200px] w-[400px] rounded-md border border-gray-300 p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 md:w-[900px]"
              placeholder="Type your comment here..."
            />
            <input
              id="rating"
              name="rating"
              required
              type="number"
              className="h-[50px] w-[400px] rounded-md border border-gray-300 p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 md:w-[900px]"
              placeholder="What would you rate this movie?"
            />

            <button
              type="submit"
              className="ml-[48px] rounded-lg bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
      </SignedIn>
      <SignedOut>
        <div className="lg:p-12" />
        <div className="flex flex-col items-center justify-center gap-2">
          <SignInButton>
            <button
              type="submit"
              className="mt-4 h-14 w-20 rounded-lg bg-blue-500 p-2 font-bold text-white hover:bg-blue-700"
            >
              Sign in
            </button>
          </SignInButton>
        </div>
      </SignedOut>
    </main>
  );
};

export default Page;
