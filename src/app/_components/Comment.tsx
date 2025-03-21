import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";

const Comment = (props: {
  comment: {
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
}) => {
  return (
    <Card className="mb-4 rounded-lg border border-gray-200 bg-gray-100 px-4 py-8 dark:border-gray-700 dark:bg-gray-800 md:mx-16 md:w-[900px]">
      <div className="flex gap-4">
        <Avatar className="mb-16 h-10 w-10 flex-shrink-0">
          <AvatarImage alt="@shadcn" src={props.comment.avatar || ""} />
          <AvatarFallback>AC</AvatarFallback>
        </Avatar>{" "}
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div className="space-x-2">
              <span className="font-medium">{props.comment.name}</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {props.comment.created_At.toLocaleDateString()} -{" "}
                {props.comment.created_At.toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
            <div className="">
              <Button size="sm" variant="ghost">
                <ReplyIcon className="h-4 w-4" />
                Reply
              </Button>
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-300">
            {props.comment.body}
          </p>
          <br />
          <p>
            Rating: <b>{props.comment.rating}/10</b>
          </p>
        </div>
      </div>
    </Card>
  );
};

function ReplyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 17 4 12 9 7" />
      <path d="M20 18v-2a4 4 0 0 0-4-4H4" />
    </svg>
  );
}

export default Comment;
