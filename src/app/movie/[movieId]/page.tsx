import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import MovieCardId from "~/app/_components/MovieCardId";
import { getComments } from "~/server/queries";
import TComment from "../../_components/Comment";
import { getNewCommentAction } from "./actions";

export default async function Page({
  params,
}: {
  params: {
    movieId: string;
  };
}) {
  const comments = [
    {
      name: "Sarah",
      avatar:
        "https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
      body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
      key: "1",
      createdAt: new Date("3:34 PM"),
      updatedAt: new Date("3:34 PM"),
      userId: "1",
      movieId: "1",
      commentId: "1",
    },
  ];

  const apiComments = await getComments();

  // apiComments.push(...newComments);

  const newComments = [...comments];

  // newComments.push(apiComments);
  return (
    <>
      <MovieCardId params={params} />
      <div className="mt-16 gap-3 space-y-4">
        {newComments.map((comment) => (
          <TComment comment={comment} key={comment.key} />
        ))}

        {apiComments.map((comment) => (
          <TComment comment={comment} key={comment.key} />
        ))}
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
            action={getNewCommentAction}
            method="post"
            className="flex flex-col items-center justify-center gap-2"
          >
            <input
              id="comment"
              name="comment"
              required
              className="h-[200px] w-[300px] rounded-md border border-gray-300 p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 md:w-[900px]"
              placeholder="Type your comment here..."
            />
            <button
              type="submit"
              className="mr-[42%] rounded-lg bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 md:ml-[96px]"
            >
              Submit
            </button>
          </form>
        </SignedIn>
      </div>
    </>
  );
}
