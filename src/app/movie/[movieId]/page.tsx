import MovieCardId from "~/app/_components/MovieCardId";
import Comment from "../../_components/Comment";

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
      time: "3:34 PM",
      body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    },
    {
      name: "Sarah",
      avatar:
        "https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
      time: "3:34 PM",
      body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    },
  ];
  return (
    <>
      <MovieCardId params={params} />
      <div className="mt-8 gap-3 space-y-4">
        {comments.map((comment) => (
          <Comment
            name={comment.name}
            avatar={comment.avatar}
            key={comment.name}
            time={comment.time}
            body={comment.body}
          />
        ))}
      </div>
    </>
  );
}
