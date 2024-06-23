import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import React from "react";
import MovieCardId from "~/app/_components/MovieCardId";
import Comment from "~/components/comment-component";
import { getComments } from "~/server/queries";

const Page = async ({ params }: { params: { movieId: string } }) => {
  const comments = await getComments();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const comment = formData.get("comment") as string;
    const rating = formData.get("rating") as string;
    console.log(comment, rating);
  }

  const newComments = [...comments];

  return (
    <>
      <section>
        <MovieCardId params={params} />
      </section>
      <section>
        <div className="mt-16 gap-3 space-y-4">
          {comments.map(
            (comment) =>
              comment.movieId === params.movieId && (
                <Comment comment={comment} key={comment.key} />
              ),
          )}
          {newComments.map(
            (comment) =>
              comment.movieId === params.movieId && (
                <Comment comment={comment} key={comment.key} />
              ),
          )}

          <SignedOut>
            <div className="flex flex-col items-center justify-center gap-2">
              <SignInButton>
                <button
                  type="submit"
                  className="rounded-lg bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
                >
                  Sign in to comment.
                </button>
              </SignInButton>
            </div>
          </SignedOut>
          <SignedIn>
            <form
              method="post"
              // action={(e) => handleSubmit(e)}
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
                placeholder="Type your rating here..."
              />

              <button
                type="submit"
                className="mr-[44%] rounded-lg bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 md:ml-[96px]"
              >
                Submit
              </button>
            </form>
          </SignedIn>
        </div>
      </section>
    </>
  );
};

export default Page;
