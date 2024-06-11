import Image from "next/image";

const Comment = (props: {
  comment: {
    name: string;
    avatar: string;
    body: string;
    key: string;
    createdAt: Date;
    updatedAt: Date | null;
    userId: string;
    movieId: string;
    commentId: string;
  };
}) => {
  return (
    <div
      className="ml-8 mt-4 w-64 antialiased md:w-[90%]"
      key={props.comment.key}
    >
      <div className="space-y-4">
        <div className="flex">
          <div className="mr-3 flex-shrink-0">
            <Image
              className="mt-2 h-8 w-8 rounded-full sm:h-10 sm:w-10"
              src={props.comment.avatar}
              alt={`${props.comment.name}'s avatar`}
              width={64}
              height={64}
            />
          </div>
          <div className="flex-1 rounded-lg border px-4 py-2 leading-relaxed sm:px-6 sm:py-4">
            <strong className="mr-2">{props.comment.name}</strong>
            <span className="text-xs text-gray-400">3:34 PM</span>
            <p className="text-sm">{props.comment.body}</p>
            <div className="mt-4 flex items-center">
              <div className="mr-2 flex -space-x-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
