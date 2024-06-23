import { db } from "./db";
import { commentSchema } from "./db/schema";

export const getComments = async () => {
  return await db.query.commentSchema.findMany();
};

export const addComment = async (props: {
  data: {
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
  error: Error;
}) => {
  return await db.insert(commentSchema).values(props.data);
};
