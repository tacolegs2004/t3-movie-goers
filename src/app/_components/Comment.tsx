import { eq } from "drizzle-orm";
import { Trash2 } from "lucide-react";
import { revalidateTag } from "next/cache";
import Image from "next/image";
import "server-only";
import { Button } from "~/components/ui/button";
import { db } from "~/server/db";
import { commentSchema } from "~/server/db/schema";

const Comment = (props: {
  comment: {
    name: string;
    avatar: string;
    body: string;
    key: string;
    created_At: Date;
    updated_At: Date | null;
    userId: string;
    movieId: string;
    commentId: string;
  };
}) => {
  return (
    <div
      className="ml-16 mt-8 w-64 rounded-lg border-2 border-gray-300 p-4 antialiased md:w-[90%]"
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
          <div className="flex-1 rounded-lg border-l-4 px-4 py-2 leading-relaxed sm:px-6 sm:py-4">
            <strong className="mr-2">{props.comment.name}</strong>
            <span className="text-xs text-gray-400">3:34 PM</span>
            <p className="text-sm">{props.comment.body}</p>
            <div className="mt-4 flex items-center">
              <div className="mr-2 flex -space-x-2"></div>
            </div>
            <div className="mt-4">
              <form
                action={async () => {
                  "use server";
                  await db
                    .delete(commentSchema)
                    .where(
                      eq(commentSchema.commentId, props.comment.commentId),
                    );

                  // await db.insert(commentSchema).values({
                  //   name: props.comment.name,
                  //   avatar: props.comment.avatar,
                  //   body: props.comment.body,
                  //   key: props.comment.key,
                  //   createdAt: props.comment.createdAt,
                  //   updatedAt: props.comment.updatedAt,
                  //   userId: props.comment.userId,
                  //   movieId: props.comment.movieId,
                  //   commentId: props.comment.commentId,
                  // });

                  revalidateTag("/");
                }}
              >
                <Button type="submit" variant={"destructive"}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
