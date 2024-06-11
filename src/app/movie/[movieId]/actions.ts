"use server";

import { db } from "~/server/db";

export const getNewCommentAction = async (formData: FormData) => {
  const comments = await db.query.commentSchema.findFirst({
    // where: {
    // },
  });
};

//   const comments = await db.query.commentSchema.findFirst();

//   const newComments = [...comments];

//   // ensure a way to update the database by creating a new comment that pushes the new comments to the database

//   newComments.push({
//     name: formData.get("name") as string,
//     avatar: formData.get("avatar") as string,
//     body: formData.get("body") as string,
//     movieId: formData.get("movieId") as string,
//   });
// };
