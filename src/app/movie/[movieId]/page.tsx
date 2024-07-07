import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import React from "react";
import MovieCardId from "~/app/_components/MovieCardId";
import Comment from "~/components/comment-component";
import { getComments } from "~/server/queries";
// import getNewComments from "./actions";

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
  };
}) => {
  const comments = await getComments();
  const newComments = [...comments];

  const addNewComment = async (formData: FormData) => {
    const rawFormData = {
      commentId: formData.get("commentId"),
      rating: formData.get("rating"),
    };

    const newComment = [...newComments].map((comment) => {
      return {
        ...comment,
        ...rawFormData,
      };
    });

    comments.push(newComment as unknown as Comment);
    console.log(newComment);
    return newComment;
  };
  return (
    <>
      <section>
        <MovieCardId params={params} />
      </section>
      <section className="mt-16 gap-3 space-y-4">
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

        <SignedIn>
          <section className="flex flex-col items-center justify-center gap-2">
            {" "}
            <form
              method="post"
              action={addNewComment}
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
                className="rounded-lg bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 md:mr-[89%]"
              >
                Submit
              </button>
            </form>
          </section>
        </SignedIn>
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
      </section>
    </>
  );
};

export default Page;
