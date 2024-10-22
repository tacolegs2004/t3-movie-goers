import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Comment from "~/app/_components/Comment";
import MovieIdPage from "~/app/_components/MovieIdPage";
import getMovieById from "~/lib/getMovieById";
import { db } from "~/server/db";
import { addNewCommentAction } from "./action";

interface Comment {
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
}

export default async function Page({
  params,
}: {
  params: { movieId: string };
}) {
  const movie = await getMovieById({ params });
  const commentSchema = await db.query.commentSchema.findMany();
  const comments = commentSchema[Number(params.movieId)];

  return (
    <>
      <main className="flex flex-col items-center justify-center">
        <div className="container my-48 flex h-screen flex-col items-center justify-center gap-2 md:my-96 md:-mb-4 md:mt-40 lg:-mt-4 lg:flex-row">
          <MovieIdPage movie={movie} />
        </div>

        <SignedIn>
          <div className="gap-3 space-y-4 lg:mt-24">
            {!commentSchema && (
              <div>No comments have been posted yet. {":("}</div>
            )}
            {commentSchema.map((comment) => (
              <Comment key={comment.commentId} comment={comment} />
            ))}

            <form
              className="flex flex-col items-center justify-center gap-2"
              action={addNewCommentAction}
            >
              <input type="hidden" name="movieId" value={params.movieId} />
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
                placeholder="Rate the movie"
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
    </>
  );
}
