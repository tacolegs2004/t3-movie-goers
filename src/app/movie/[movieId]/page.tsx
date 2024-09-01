import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import MovieCardId from "~/app/_components/MovieCardId";
import CommentComponent from "~/components/comment-component";
import { db } from "~/server/db";
import type { getComments } from "~/server/queries";

type Comment = Awaited<ReturnType<typeof getComments>>[number];
const Page = async ({
  params,
}: {
  params: {
    movieId: string;
  };
}) => {
  const commentData = await db.query.commentSchema.findMany();
  const newComments = [...commentData];

  return (
    <main className="flex flex-col items-center justify-center">
      <section>
        <MovieCardId params={params} />
      </section>

      <section className="mt-16 gap-3 space-y-4">
        {commentData.map(
          (comment) =>
            comment.movieId === params.movieId && (
              <CommentComponent comment={comment} key={comment.key} />
            ),
        )}
        {newComments.map(
          (comment) =>
            comment.movieId === params.movieId && (
              <CommentComponent comment={comment} key={comment.key} />
            ),
        )}
      </section>

      <SignedIn>
        <form
          method="post"
          className="flex flex-col items-center justify-center gap-2"
        >
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
