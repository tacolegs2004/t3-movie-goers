import { db } from "./db";

export const getComments = async () => {
  const comments = await db.query.commentSchema.findMany();

  return comments;
};
